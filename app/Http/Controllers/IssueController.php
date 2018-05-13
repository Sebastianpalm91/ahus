<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    }
}
