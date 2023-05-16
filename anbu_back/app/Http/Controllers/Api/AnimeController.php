<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeCutResource;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\BannerResource;
use App\Http\Resources\CarouselResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PromoResource;
use App\Models\Anime;
use App\Models\Banner;
use App\Models\Carousel;
use App\Models\Comment;
use App\Models\Genre;
use App\Models\Promo;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnimeController extends Controller
{

    private $anime;

    public function __construct()
    {
        $this->anime = Anime::active();
    }

    public function index(Request $request)
    {
        $query = $this->anime->where('active', 1);

        if ($request->size) {
            $query = $query->orderBy('created_at', 'desc')->paginate($request->size);

            return response()->json([
                'data' => AnimeResource::collection($query),
                'total' => $query->total(),
            ]);
        } else {
            $query = $query->orderBy('created_at', 'desc')->get();

            return response()->json([
                'data' => AnimeResource::collection($query),
                'total' => $this->anime->count(),
            ]);
        }
    }

    public function show($id)
    {
        return new AnimeResource($this->anime->findOrFail($id));
    }

    public function getBanner($id)
    {
        return response()->json([
            'data' => [
                'banner' => BannerResource::collection(Banner::where('id', $id)->with('anime')->get()),
            ],
        ]);
    }

    public function getPromo($id)
    {
        return response()->json([
            'data' => [
                'banner' => PromoResource::collection(Promo::where('id', $id)->with('anime')->get()),
            ],
        ]);
    }

    public function search(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required'],
        ]);

        $title = $validatedData['title'];

        $animes = Anime::where('active', true)
            ->where(function ($query) use ($title) {
                $query
                    ->where('en_title', 'like', "%{$title}%")
                    ->orWhere('ua_title', 'like', "%{$title}%");
            })
            ->get(['id', 'ua_title', 'en_title', 'aired', 'alias']);

        return response()->json([
            'data' => [
                'animes' => $animes,
            ],
            'status' => 'success',
        ]);
    }

    public function comments($id)
    {
        $review = CommentResource::collection(
            Comment::where('comments.anime_id', $id)
                ->leftJoin('reviews', function ($join) {
                    $join->on('reviews.user_id', '=', 'comments.user_id')
                        ->on('reviews.anime_id', '=', 'comments.anime_id');
                })
                ->orderBy('comments.created_at', 'desc')
                ->select('comments.*', 'reviews.stars')
                ->get()
        );
        $total = Comment::where('comments.anime_id', $id)->count();

        return response()->json([
            'data' => [
                'reviews' => $review,
                'total' => $total,
            ]
        ]);
    }

    public function comment(Request $request)
    {
        $request->validate([
            'comment' => ['required'],
        ]);

        $userId = $request->input('user_id');
        $animeId = $request->input('anime_id');

        $comment = new Comment();
        $comment->user_id = $userId;
        $comment->anime_id = $animeId;
        $comment->comment = $request->input('comment');
        $comment->save();

        $existingReview = Review::with(['user', 'anime'])
            ->where('user_id', $userId)
            ->where('anime_id', $animeId)
            ->exists();

        if (!$existingReview) {
            $review = new Review();
            $review->user_id = $userId;
            $review->anime_id = $animeId;
            $review->stars = $request->input('stars');
            $review->save();
        }

        return response(['status' => true]);
    }


    public function showByGenre(Request $request)
    {
        $genre = $request->genre;
        $animes = AnimeCutResource::collection($this->anime->whereHas('genres', function ($query) use ($genre) {
            $query->where('en_name', $genre);
        })->get());
        $genreInfo = Genre::where('en_name', $genre)->get(['name', 'en_name']);

        return response()->json([
            'data' => [
                'animes' => $animes,
                'genre' => $genreInfo,
            ],
            'status' => 'success',
        ]);
    }

    public function carousel()
    {
        return response()->json([
            'data' => [
                'carousel' => CarouselResource::collection(Carousel::orderBy('created_at', 'desc')->limit(6)->get()),
            ],
            'status' => 'success',
        ]);
    }

    public function carouselMutate(Request $request)
    {
        if ($request->hasFile('slide')) {
            $alias = $this->anime->where('id', $request->anime)->value('alias');

            $slidePath = 'images/anime/carousel/slides/';

            // slide
            $slideExtension = $request->file('slide')->extension();
            $slideFilename = $request->anime . '-' . $alias . '.' . $slideExtension;

            // Put in Storage
            $request->slide->storeAs($slidePath, $slideFilename);

            // Put in Database
            $carousel = new Carousel();
            $carousel->anime_id = $request->input('anime');
            $carousel->content_path = (string)$slidePath . $slideFilename;
            $carousel->save();
        }

        return response()->json([
            'status' => 'success',
        ]);
    }

    public function queries(Request $request)
    {
        $validatedData = $request->validate([
            'query' => ['required'],
        ]);

        $query = $validatedData['query'];

        // Recent
        if ($query === 'recently') {
            return response()->json([
                'data' => [
                    'animes' => AnimeCutResource::collection(
                        $this->anime->select(['animes.id', 'animes.ua_title', 'animes.alias', 'preview_path', 'animes.created_at'])
                            ->join('previews', 'animes.id', '=', 'previews.anime_id')
                            ->orderByDesc('created_at', 'desc')->limit(12)->get()
                    ),
                ],
            ]);
        }
        // Best
        if ($query === 'best') {
            return response()->json([
                'data' => [
                    'animes' => AnimeCutResource::collection(
                        $this->anime->selectRaw('animes.id, animes.alias, animes.ua_title, avg(stars) as avg_stars, preview_path')
                            ->join('reviews', 'animes.id', '=', 'reviews.anime_id')
                            ->join('previews', 'animes.id', '=', 'previews.anime_id')
                            ->groupBy('animes.id')
                            ->orderByDesc('avg_stars')
                            ->limit(12)
                            ->get()
                    ),
                ],
            ]);
        }
        // Popular
        if ($query === 'popular') {
            return response()->json([
                'data' => [
                    'animes' =>  AnimeCutResource::collection(
                        $this->anime->selectRaw('animes.id, animes.alias, animes.ua_title, count(user_id) as count_review, preview_path')
                            ->join('reviews', 'animes.id', '=', 'reviews.anime_id')
                            ->join('previews', 'animes.id', '=', 'previews.anime_id')
                            ->groupBy('animes.id')
                            ->orderByDesc('count_review')
                            ->limit(12)
                            ->get()
                    ),
                ],
            ]);
        }
    }
}
