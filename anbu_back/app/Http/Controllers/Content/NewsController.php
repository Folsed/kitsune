<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\AnimeController;
use Illuminate\Support\Facades\Http;
use App\Models\Anime;
use App\Models\Preview;
use App\Models\Screenshot;

class NewsController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            return view('main-views.news', [
                'data' => Anime::all(),
                'preview' => Preview::all(),
                'screenshot' => Screenshot::all(),
                'currentuser' => User::find($id),
                'role' => User::find($id)->hasRole('admin'),
            ]);
        } else {

            return view('main-views.news', [
                'data' => Anime::all(),
                'preview' => Preview::all(),
                'screenshot' => Screenshot::all(),
            ]);
        }
        // $data = Http::get('https://kitsu.io/api/edge/trending/anime?limit=5')
        // ->json('data');

        //  return dd($data);

        // $genres = Http::get('https://kitsu.io/api/edge/anime/12/genres');

    }
}
