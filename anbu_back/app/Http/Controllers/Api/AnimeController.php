<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeCutResource;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\BannerResource;
use App\Http\Resources\CarouselResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PromoResource;
use App\Http\Resources\ReviewResource;
use App\Models\Anime;
use App\Models\AnimeSeries;
use App\Models\Banner;
use App\Models\Carousel;
use App\Models\Comment;
use App\Models\Genre;
use App\Models\Promo;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

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
            $result = response()->json([
                'data' => AnimeCutResource::collection($query),
                'total' => $query->total(),
            ]);
            return $result;
        } else {
            $query = $query->orderBy('created_at', 'desc')->get();
            $result = response()->json([
                'data' => AnimeCutResource::collection($query),
                'total' => $this->anime->count(),
            ]);
            return $result;
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
            'title' => ['required', 'string'],
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

    public function reviews($id)
    {
        $review = ReviewResource::collection(
            Review::where('anime_id', $id)
                ->orderBy('created_at', 'desc')
                ->get()
        );
        $total = Review::where('anime_id', $id)->count();
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
            'comment' => ['required', 'string'],
            'stars' => ['required', 'numeric'],
        ]);

        $review = new Review();
        $review->user_id = $request->input('user_id');
        $review->anime_id = $request->input('anime_id');
        $review->stars = $request->input('stars');
        $review->text = $request->input('comment');
        $review->save();

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
            'status' => true,
        ]);
    }

    public function queries(Request $request)
    {
        $validatedData = $request->validate([
            'query' => ['required', 'string'],
        ]);
        $category = $validatedData['query'];

        // Recent
        if ($category === 'recently') {
            $query = AnimeCutResource::collection(
                $this->anime->select(['animes.id', 'animes.ua_title', 'animes.alias', 'preview_path', 'animes.created_at'])
                    ->join('previews', 'animes.id', '=', 'previews.anime_id')
                    ->orderByDesc('created_at', 'desc')->limit(12)->get()
            );
            return response()->json([
                'data' => [
                    'animes' => $query,
                ],
            ]);
        }
        // Best
        if ($category === 'best') {
            $query =  AnimeCutResource::collection(
                $this->anime->selectRaw('animes.id, animes.alias, animes.ua_title, avg(stars) as avg_stars, preview_path')
                    ->join('reviews', 'animes.id', '=', 'reviews.anime_id')
                    ->join('previews', 'animes.id', '=', 'previews.anime_id')
                    ->groupBy('animes.id')
                    ->orderByDesc('avg_stars')
                    ->limit(12)
                    ->get()
            );
            return response()->json([
                'data' => [
                    'animes' => $query,
                ],
            ]);
        }
        // Popular
        if ($category === 'popular') {
            $query = AnimeCutResource::collection(
                $this->anime->selectRaw('animes.id, animes.alias, animes.ua_title, count(user_id) as count_review, preview_path')
                    ->join('reviews', 'animes.id', '=', 'reviews.anime_id')
                    ->join('previews', 'animes.id', '=', 'previews.anime_id')
                    ->groupBy('animes.id')
                    ->orderByDesc('count_review')
                    ->limit(12)
                    ->get()
            );
            return response()->json([
                'data' => [
                    'animes' =>  $query,
                ],
            ]);
        }
    }

    public function getSeries($animeId)
    {
        return response()->json([
            'series' => AnimeSeries::where('anime_id', $animeId)->get(),
        ]);
    }
}
