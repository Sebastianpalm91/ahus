<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GrahamCampbell\Binput\Facades\Binput;
use App\NewsFeed;
use App\User;

class NewsController extends Controller
{
    function get($id = null) {
        if($id === null){
            $news = NewsFeed::get();
        } else if(NewsFeed::find($id) || abort(500)) $news = NewsFeed::where('id', $id)->get();
         
        foreach ($news as $article => $value) {
            $news[$article]['author'] = User::find($value['author_id'])->only(['name', 'email', 'id']);
        }

        return response()->json([
            'news' => $news,
        ]);
    }

    function post(Request $request) {
        if(!$request->has('title', 'body', 'location', 'name')) return response()->json(['error' => true, 'info' => 'Missing parameters']);

        $news = new Issue;

        $news->title = $request->title;
        $news->body = $request->body;
        $news->location = $request->location;
        $news->name = $request->name;

        $news->save();

        return response()->json([
            "status" => "Might have worked"
        ]);
    }

    function put($id){
        $r = request();

        $changes = [];

        if($news = News::find($id)){

            foreach(Binput::except('_token') as $key => $value){
                if($news[$key] !== $value && $news->update([$key => $value])){
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
                'message' => 'News of given ID could not be found'
            ]);
        }
    }

    function delete($id){
        return response()->json([
            'delete' => "true"
        ]);
    }
}
