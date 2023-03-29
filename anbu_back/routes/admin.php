<?php

use App\Http\Controllers\Admin\AnimeController;
use App\Http\Controllers\Admin\AnimeFormsController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\Admin\RoleController;
use Illuminate\Support\Facades\Route;


/*
Admin Routes
*/

Route::middleware(['auth', 'admin'])->group(function () {
    /* Home page */
    Route::get('admin', function() {
        return view('admin-views.admin-home');
    });

    Route::get('admin/tables/anime', [AnimeController::class, 'show'])->name('admin-tables-anime');

    /*
    Form routes
    */
    Route::controller(AnimeFormsController::class)->group(function () {
        Route::get('admin/forms/anime', 'index')->name('admin-forms-anime');

        /*
        Form submits
        */
        Route::post('admin/forms/anime', 'create')->name('admin-forms-create-anime-submit');
    });

    //...



    Route::get('roles', [RoleController::class, 'show'])->name('admin-showroles');
});
