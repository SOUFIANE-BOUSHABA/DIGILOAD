<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(
            \App\Repositories\Contracts\UserRepositoryInterface::class,
            \App\Repositories\Implementations\UserRepository::class
        );
    
        $this->app->bind(
            \App\Services\Contracts\UserServiceInterface::class,
            \App\Services\Implementations\UserService::class
        );

        $this->app->bind(
            \App\Repositories\Contracts\ProfileRepositoryInterface::class,
            \App\Repositories\Implementations\ProfileRepository::class
        );
    
        $this->app->bind(
            \App\Services\Contracts\ProfileServiceInterface::class,
            \App\Services\Implementations\ProfileService::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //

    }
}
