<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeCutResource;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\CarouselResource;
use App\Http\Resources\CommentResource;
use App\Models\Anime;
use App\Models\Carousel;
use App\Models\Comment;
use App\Models\Genre;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnimeController extends Controller
{
    public function index(Request $request)
    {
        $query = Anime::where('active', 1);

        if ($request->size) {
            $query = $query->orderBy('created_at', 'desc')->paginate($request->size);

            return response()->json([
                'data' => AnimeResource::collection($query),
                'total' => Anime::count(),
            ]);
        } else {
            $query = $query->orderBy('created_at', 'desc')->get();

            return response()->json([
                'data' => AnimeResource::collection($query),
                'total' => Anime::count(),
            ]);
        }
    }

    public function show($id)
    {
        return new AnimeResource(Anime::findOrFail($id));
    }

    public function search(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required'],
        ]);

        $title = $validatedData['title'];

        $animes = Anime::where('en_title', 'like', "%{$title}%")->orWhere('ua_title', 'like', "%{$title}%")->get(['id', 'ua_title', 'en_title', 'aired', 'alias']);

        return response()->json([
            'data' => [
                'animes' => $animes,
            ],
            'status' => 'success',
        ]);
    }

    public function comments($id)
    {
        return CommentResource::collection(Comment::where('anime_id', $id)->orderBy('created_at', 'desc')->get());
    }

    public function comment(Request $request)
    {
        if ($request->comment) {
            $comment = new Comment();
            $comment->user_id = $request->user_id;
            $comment->anime_id = $request->anime_id;
            $comment->comment = $request->comment;
            $comment->save();

            return response(['status' => 'success']);
        } else {
            return response(['status' => 'comment is empty']);
        }
    }

    public function showByGenre(Request $request)
    {
        $genre = $request->genre;
        $animes = AnimeCutResource::collection(Anime::whereHas('genres', function ($query) use ($genre) {
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
            $alias = Anime::where('id', $request->anime)->value('alias');

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
                        Anime::select(['animes.id', 'animes.ua_title', 'animes.alias', 'preview_path', 'animes.created_at'])
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
                        Anime::selectRaw('animes.id, animes.alias, animes.ua_title, avg(stars) as avg_stars, preview_path')
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
                        Anime::selectRaw('animes.id, animes.alias, animes.ua_title, count(user_id) as count_review, preview_path')
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
