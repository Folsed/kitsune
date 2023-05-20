<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Content\AnimeController;
use App\Http\Controllers\Content\HomeController;
use App\Http\Controllers\Content\NewsController;
use App\Http\Controllers\TestController;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

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
Route::get('source/videos/{root}/{filename}', function ($root, $filename) {
    $path = storage_path('app/videos/' . $root . '/' . $filename);
    return response()->download($path);
});

Route::get('source/images/{root}/{category}/{filename}', function ($root, $category, $filename) {
    $path = storage_path('app/images/' . $root . '/' . $category . '/' . $filename);
    return response()->download($path);
});

// Route::get('source/images/anime/previews/{filename}', function (Request $request, $filename) {
//     $path = storage_path('app/images/anime/previews/' . $filename);

//     $response = Response::file($path);
//     $response->setCache([
//         'public' => true,
//         'max_age' => 31536000, // Cache for 1 year (adjust according to your requirements)
//     ]);

//     return $response;
// });

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/api.php';
