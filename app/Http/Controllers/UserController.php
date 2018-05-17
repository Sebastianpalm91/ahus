<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GrahamCampbell\Binput\Facades\Binput;
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

        $changes = [];

        if($user = User::find($id)){
            if($r->has('email') && $user->email !== Binput::get('email')){
                if($user->update(Binput::only('email'))){
                    array_push($changes, "email");
                }
            }

            if($r->has('password') && strlen(Binput::get('password')) > 0){
                if($user->update(['password' => bcrypt(Binput::get('password'))])){
                    array_push($changes, 'password');
                }
            }

            if($r->has('name') && $user->name != Binput::get('name')){
                if($user->update(Binput::only('name'))){
                    array_push($changes, "name");
                }
            }

            return response()->json([
                "status" => "200",
                "changed" => $changes,
            ]);
        }
    }

    function delete($id){
        if($user = User::find($id)){
            if($user->delete()){
                return response()->json([
                    'status' => "200",
                    'message' => 'User deleted successfully'
                ]); 
            }
        }
    }

    public function token(){
        return response()->json([
            'token' => csrf_token()
        ]);
    }
}
