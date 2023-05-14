<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Content\AnimeController;
use App\Http\Controllers\Content\HomeController;
use App\Http\Controllers\Content\NewsController;
use App\Http\Controllers\TestController;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*
Content Routes
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/',  function () {
    return Watchlist::where('user_id', 1)->get('anime_id');
})->name('home');

// Route::controller(AnimeController::class)->group(function () {
//     Route::get('anime/{id}/{alias?}', 'show')->name('anime');
//     Route::post('anime/{id}/{alias?}', 'createComment')->middleware('auth')->name('anime-comment');
// });

// Route::get('news', [NewsController::class, 'index'])->name('news');




// //Test Route
// Route::get('test', [TestController::class, 'index'])->name('test');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/api.php';
