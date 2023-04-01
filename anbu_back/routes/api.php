<?php

use App\Http\Controllers\Api\AnimeController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PreviewController;
use App\Http\Controllers\Auth\RegisteredUserController;
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

// Auth
Route::post('api/registered', [AuthController::class, 'registered'])->name('api-registered');

// Anime API

Route::controller(AnimeController::class)->group(function () {
    Route::get('api/anime', 'index')->name('api-anime-all');
    Route::get('api/anime/{id}', 'show')->name('api-anime-byId');
});


Route::get('api/anime/genres/list', function() {
    return GenreResourse::collection(Genre::all());
})->name('show-genres');
