<?php

use Illuminate\Http\Request;

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

Route::get('/issue', 'IssueController@get');

Route::get('/issue/{id?}', 'IssueController@get')->where(['id' => '[0-9]+']);
Route::get('/issue/campus/{id?}', 'IssueController@byCampus');

Route::post('/issue', 'IssueController@post');
Route::put('/issue/{id}', 'IssueController@put')->middleware('auth:api');
Route::delete('/issue/{id}', 'IssueController@delete')->middleware('auth:api');

Route::get('/news/{id?}', 'NewsController@get');
Route::post('/news', 'NewsController@post');
Route::put('/news/{id}', 'NewsController@put')->middleware('auth:api');
Route::delete('/news/{id}', 'NewsController@delete')->middleware('auth:api');

Route::get('/user/{id?}', 'UserController@get');
Route::get('/token', 'UserController@token');
Route::post('/user', 'UserController@post');
Route::put('/user/{id}', 'UserController@put')->middleware('auth:api');
Route::delete('/user/{id}', 'UserController@delete')->middleware('auth:api');

Route::get('/location', 'LocationController@get');
Route::get('/campus', 'LocationController@campus');