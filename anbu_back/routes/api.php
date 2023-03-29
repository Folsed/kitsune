<?php

use App\Http\Controllers\Api\AnimeController;
use App\Http\Controllers\Api\PreviewController;
use App\Http\Resources\AnimeCollection;
use App\Http\Resources\AnimeResource;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\GenreResourse;
use App\Http\Resources\PreviewResource;
use App\Models\Anime;
use App\Models\Category;
use App\Models\Genre;
use App\Models\Preview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/api/user', function (Request $request) {
    return $request->user()->all()->toArray();
});

Route::get('api/anime', function() {
    return AnimeResource::collection(Anime::all());
});

Route::get('api/anime/{id}', [AnimeController::class, 'show'])->name('show-anime');

Route::get('api/anime/genres/list', function() {
    return GenreResourse::collection(Genre::all());
})->name('show-genres');
