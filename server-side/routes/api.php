<?php

use App\Http\Controllers\CrudController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('cruds', CrudController::class);
});
