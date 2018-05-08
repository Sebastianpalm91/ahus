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

Route::get('/user/{id?}', 'PagesController@user')->name('user');

Route::get('/news/{id?}', 'PagesController@news')->name('news');

Route::get('/issue/{id?}', 'PagesController@issue')->name('issue');
