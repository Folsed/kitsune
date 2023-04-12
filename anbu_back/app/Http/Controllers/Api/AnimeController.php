<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\CommentResource;
use App\Models\Anime;
use App\Models\Comment;
use App\Models\Genre;
use Illuminate\Http\Request;

class AnimeController extends Controller
{
    public function index()
    {
        return AnimeResource::collection(Anime::all());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
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
        $animes = AnimeResource::collection(Anime::whereHas('genres', function ($query) use ($genre) {
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

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
