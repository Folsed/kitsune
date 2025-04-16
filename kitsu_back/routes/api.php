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
        Route::get('api/admin/get/anime', 'index')->name('api.anime.all');
        Route::post('api/create/anime', 'create')->name('api.anime.create');
        Route::post('api/destroy/anime', 'destroy')->name('api.anime.delete');
        Route::post('api/deactivate/anime', 'deactivate')->name('api.anime.deactivate');
        Route::post('api/series/anime/upload', 'createAnimeSeries')->name('api.anime.series.upload');

        // Banners
        Route::post('api/create/banner', 'bannerCreate')->name('api.banner.create');
        Route::post('api/create/banner/promo', 'promoCreate')->name('promo.create');

        // Carousel
        Route::post('api/carousel/anime/mutate', 'carouselMutate')->name('api.carousel.mutate');
    });


    Route::get('api/table/search/anime', [AnimeTablesController::class, 'tableSearch'])->name('api.anime.delete');
});


// Auth API



Route::controller(AuthController::class)->group(function () {
    Route::post('api/registered', 'registered')->name('api.registered');
    Route::post('api/login', 'login')->name('api.login');


    Route::middleware('auth:sanctum')->group(function () {
        Route::post('api/logout', 'logout')->name('api.logout');
    });
});


// User API
Route::get('api/user', [UserController::class, 'user'])->name('api.user');


Route::middleware('auth:sanctum')->controller(UserController::class)->group(function () {
    Route::get('api/user/pronouns', 'getPronouns')->name('api.pronouns');

    Route::put('api/user/info/update', 'updateInfo')->name('api.update.info');

    // Watchlist
    Route::post('api/watchlist/mylist', 'addToWatchlist')->name('api.watchlist.mylist');
    Route::get('api/watchlist/get/{userId}', 'getMyList')->name('api.watchlist.get');

    // Review
    Route::get('api/review/solo/{animeId}/myReview', 'soloReview')->name('api.review.solo');
    Route::get('api/review/all/{userId}/myReviews', 'myReviews')->name('api.reviews.all');
});

// Anime API
Route::controller(AnimeController::class)->group(function () {
    Route::get('api/anime', 'index')->name('api.anime.all');
    Route::get('api/anime/{id}', 'show')->name('api.anime.byId');
    Route::get('api/series/anime/get/{animeId}', 'getSeries')->name('api.anime.get');


    // Reviews
    Route::get('api/reviews/anime/{id}/get_reviews', 'reviews')->name('api.anime.comments');
    Route::post('api/review/leave_review', 'comment')->name('api.anime.comment');
    // Search
    Route::get('api/search/anime', 'search')->name('api.anime.search');
    // Browse
    Route::get('api/anime/genre/{genre}', 'showByGenre')->name('api.anime.by.genre');
    // Carousel
    Route::get('api/carousel/anime', 'carousel')->name('api.carousel');
    // Queries
    Route::get('api/query/anime', 'queries')->name('api.anime.by.query');
    // Banners
    Route::get('api/banner/anime/{id}', 'getBanner')->name('api.banner');
    Route::get('api/banner/promo/anime/{id}', 'getPromo')->name('api.promo');
});

Route::get('api/anime/genres/list', function () {
    return GenreResourse::collection(Genre::all());
})->name('api.show.genres');
