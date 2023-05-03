<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    public function index()
    {

        $data = Http::get('https://kitsu.io/api/edge/trending/anime?limit=5')
        ->json('data');

         return dd($data);

        // $genres = Http::get('https://kitsu.io/api/edge/anime/12/genres');

    }
}
