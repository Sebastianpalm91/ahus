<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GrahamCampbell\Binput\Facades\Binput;
use App\Issue;

class IssueController extends Controller
{
    function get($id = null) {
        if($id === null){
            $issue = Issue::get();
        } else if(Issue::find($id) || abort(500)) $issue = Issue::where('id', $id)->get();
         

        return response()->json([
            'issues' => $issue,
        ]);
    }

    function post(Request $request) {
        if(!$request->has('title', 'body', 'location', 'name')) return response()->json(['error' => true, 'info' => 'Missing parameters']);

        $issue = new Issue;

        $issue->title = $request->title;
        $issue->body = $request->body;
        $issue->location = $request->location;
        $issue->name = $request->name;

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
