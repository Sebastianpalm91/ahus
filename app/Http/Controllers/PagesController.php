<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PagesController extends Controller
{
    public function index()
{
    $user = User::get();

    return response()->json([
        'users' => $user,
    ]);
}
}
