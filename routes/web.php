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
Route::get('/issue/{id?}', 'IssueController@get');
Route::post('/issue', 'IssueController@post');
Route::put('/issue/{id}, IssueController@put');
Route::delete('/issue/{id}, IssueController@delete');

Route::get('/news/{id?}', 'NewsController@get');
Route::post('/news', 'NewsController@post');
Route::put('/news/{id}, NewsController@put');
Route::delete('/news/{id}, NewsController@delete');

Route::get('/user/{id?}', 'UserController@get');
Route::get('/token', 'UserController@token');
Route::post('/user', 'UserController@post');
Route::put('/user/{id}/edit, UserController@put');
Route::delete('/user/{id}, UserController@delete');