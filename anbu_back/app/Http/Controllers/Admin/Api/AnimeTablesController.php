<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeResource;
use App\Models\Anime;
use Illuminate\Http\Request;

class AnimeTablesController extends Controller
{
    public function tableSearch(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required'],
        ]);

        $title = $validatedData['title'];

        $animes = AnimeResource::collection(
            Anime::where('en_title', 'like', "%{$title}%")
                ->orWhere('ua_title', 'like', "%{$title}%")->get()
        );

        return response()->json([
            'data' => [
                'animes' => $animes,
            ],
            'status' => 'success',
        ]);
    }
}
