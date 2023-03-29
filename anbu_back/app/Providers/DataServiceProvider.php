<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class DataServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Header
        view()->composer('layouts.main', function ($view) {
            if(Auth::check()) {
                $view->with(['userDataProvider' => User::find(Auth::user()->id)]);
            }
        });
    }
}
