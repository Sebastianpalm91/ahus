<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    function get($id = null) {
        if($id === null){
            $user = User::get();
        } else if(User::find($id) || abort(500)) $user = User::where('id', $id)->get();
         

        return response()->json([
            'users' => $user,
        ]);
    }

    function post() {
        if(!request()->has('email', 'password', 'name')) return response()->json(['error' => true, 'info' => 'Missing parameters']);

        $user = new User;

        $user->email = request()->email;
        $user->password = bcrypt(request()->password);
        $user->name = request()->name;

        $user->save();

        return response()->json([
            "status" => "Might have worked"
        ]);
    }

    function put($id){
        $r = request();

        $user = User::where('id', $id)->get();

        if($r->has('email'))
            $user->email = request()->email;
        if($r->has('password'))
            $user->password = bcrypt(request()->password);
        if($r->has('name'))
            $user->name = request()->name;

        $user->save();

        return response()->json([
            "status" => "Might have worked"
        ]);
    }

    function delete($id){
        return response()->json([
            'delete' => "true"
        ]);
    }

    public function token(){
        return response()->json([
            'token' => csrf_token()
        ]);
    }
}
