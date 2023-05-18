<?php

use App\Http\Controllers\Admin\Api\AnimeFormsController;
use App\Http\Controllers\Admin\Api\AnimeTablesController;
use App\Http\Controllers\Api\AnimeController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Resources\GenreResourse;
use App\Models\Genre;
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
    Route::controller(AnimeFormsController::class)->group(function () {
        // Anime
        Route::get('api/admin/get/anime', 'index')->name('api_anime-all');
        Route::post('api/create/anime', 'create')->name('api_anime-create');
        Route::post('api/destroy/anime', 'destroy')->name('api_anime-delete');
        Route::post('api/deactivate/anime', 'deactivate')->name('api_anime-deactivate');

        // Banners
        Route::post('api/create/banner', 'bannerCreate')->name('api_banner-create');
        Route::post('api/create/banner/promo', 'promoCreate')->name('promo-create');

        // Carousel
        Route::post('api/carousel/anime/mutate', 'carouselMutate')->name('api_carousel-mutate');
    });


    Route::get('api/table/search/anime', [AnimeTablesController::class, 'tableSearch'])->name('api_anime-delete');
});


// Auth API

Route::controller(AuthController::class)->group(function () {
    Route::post('api/registered', 'registered')->name('api_registered');
    Route::post('api/login', 'login')->name('api_login');


    Route::middleware('auth:sanctum')->group(function () {
        Route::post('api/logout', 'logout')->name('api_logout');
    });
});


// User API
Route::get('api/user', [UserController::class, 'user'])->name('api_user');

Route::controller(UserController::class)->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('api/user/pronouns', 'getPronouns')->name('api_pronouns');

        Route::put('api/user/info/update', 'updateInfo')->name('api_update-info');

        // Watchlist
        Route::post('api/watchlist/mylist', 'addToWatchlist')->name('api_watchlist-mylist');
        Route::get('api/watchlist/get/{userId}', 'getMyList')->name('api_watchlist-get');

        // Review
        Route::get('api/review/solo/{animeId}/myReview', 'soloReview')->name('api_review-solo');
    });
});

// Anime API
Route::controller(AnimeController::class)->group(function () {
    Route::get('api/anime', 'index')->name('api_anime-all');
    Route::get('api/anime/{id}', 'show')->name('api_anime-byId');

    // Comment
    Route::get('api/comments/anime/{id}', 'comments')->name('api_anime-comments');
    Route::post('api/comment/leave', 'comment')->name('api_anime-comment');
    // Search
    Route::get('api/search/anime', 'search')->name('api_anime-search');
    // Browse
    Route::get('api/anime/genre/{genre}', 'showByGenre')->name('api_anime-by-genre');
    // Carousel
    Route::get('api/carousel/anime', 'carousel')->name('api_carousel');
    // Queries
    Route::get('api/query/anime', 'queries')->name('api_anime-by-query');
    // Banners
    Route::get('api/banner/anime/{id}', 'getBanner')->name('api_banner');
    Route::get('api/banner/promo/anime/{id}', 'getPromo')->name('api_promo');
});

Route::get('api/anime/genres/list', function () {
    return GenreResourse::collection(Genre::all());
})->name('api_show-genres');
