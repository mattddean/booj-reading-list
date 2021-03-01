<?php

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

Route::get('/', 'HomeController@index');

Route::get('/keep-warm', 'KeepWarmController@index')->name('keep-warm');
Route::get('/smoke-test', 'SmokeTestController@index');

// https://blog.pusher.com/web-application-laravel-vue-part-4/
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');