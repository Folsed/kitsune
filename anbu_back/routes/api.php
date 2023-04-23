<?php

use App\Http\Controllers\Admin\Api\AnimeFormsController;
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


// Admin API

Route::middleware('auth:sanctum')->group(function () {
    Route::post('api/create/anime', [AnimeFormsController::class, 'create'])->name('api-anime-create');
    Route::post('api/destroy/anime', [AnimeFormsController::class, 'destroy'])->name('api-anime-delete');
});


// Auth API

Route::controller(AuthController::class)->group(function () {
    Route::post('api/registered', 'registered')->name('api-registered');
    Route::post('api/login', 'login')->name('api-login');


    Route::middleware('auth:sanctum')->group(function () {
        Route::post('api/logout', 'logout')->name('api-logout');
        Route::get('api/user', 'user')->name('api-logout');
    });
});

// Anime API
Route::controller(AnimeController::class)->group(function () {
    Route::get('api/anime', 'index')->name('api-anime-all');
    Route::get('api/anime/{id}', 'show')->name('api-anime-byId');

    // Comment
    Route::get('api/comments/anime/{id}', 'comments')->name('api-anime-comments');
    Route::post('api/comment/leave', 'comment')->name('api-anime-comment');
    // Search
    Route::get('api/search/anime', 'search')->name('api-anime-search');
    // Browse
    Route::get('api/anime/genre/{genre}', 'showByGenre')->name('api-anime-by-genre');
});

Route::get('api/anime/genres/list', function () {
    return GenreResourse::collection(Genre::all());
})->name('api-show-genres');
