<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GrahamCampbell\Binput\Facades\Binput;
use App\Issue;
use App\Campus;

class IssueController extends Controller
{
    function get($id = null) {
        if($id === null){
            $issue = Issue::get();
        } else if(Issue::find($id) || abort(500)) $issue = Issue::where('id', $id)->get();


        return response()->json([
            'issues' => $issue
        ]);
    }

    function byCampus($id){
        if(Campus::find($id) || abort(500)) $issue = Campus::find($id)->issues()->get();


        return response()->json([
            'issues' => $issue
        ]);
    }

    function post(Request $request) {

        $validate = requset()->validate([
            'title' => 'required',
            'body' => 'required',
            'campus_id' => 'required',
            'location' => 'required',
            'longitude' => 'required',
            'latitude' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required'
        ]);

        if($validate->errors) return response()->json(['error' => true, 'info' => $validate->errors->all()]);

        $issue = new Issue;

        $issue->title = Binput::get('title');
        $issue->body = Binput::get('body');
        $issue->location = Binput::get('location');
        $issue->name = Binput::get('name');
        $issue->phone = Binput::get('phone');
        $issue->email = Binput::get('email');
        $issue->campus_id = Binput::get('campus_id');
        $issue->longitude = Binput::get('longitude');
        $issue->latitude = Binput::get('latitude');

        $issue->save();

        return response()->json([
            "status" => "Might have worked"
        ]);
    }

    function put($id){
        $r = request();

        $changes = [];

        if($issue = Issue::find($id)){

            foreach(Binput::except('_token') as $key => $value){
                if($issue[$key] !== $value && $issue->update([$key => $value])){
                    array_push($changes, $key);
                }
            }

            return response()->json([
                "status" => "200",
                "changed" => $changes,
            ]);
        } else {
            return response()->json([
                'status' => '500',
                'message' => 'Issue of given ID could not be found'
            ]);
        }
    }

    function delete($id){
        if($issue = Issue::find($id)){
            if($issue->delete()){
                return response()->json([
                    'status' => "200",
                    'message' => 'Issue deleted successfully'
                ]);
            }
        } else {
            return response()->json([
                'status' => '500',
                'message' => 'Issue of given ID could not be found'
            ]);
        }
    }
}
