<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Issue;
use App\NewsFeed;

class PagesController extends Controller
{
    public function user($id = null)
    {
        if($id == null){
            $user = User::get();
        } else if(User::find($id) || abort(500)) $user = User::where('id', $id)->get();

        return response()->json([
            'users' => $user,
        ]);
    }
    public function news($id = null)
    {
        if($id == null){
            $news = NewsFeed::get();
        } else if(NewsFeed::find($id) || abort(500)) $news = NewsFeed::where('id', $id)->get();

        foreach($news as $article){
            $article['author'] = User::whereId($article['author_id'])->first();
            unset($article['author_id']);
        }
        return response()->json([
            'news' => $news,
        ]);
    }

    public function wah()
    {
        return response()->json([
            'news' => "news",
        ]);
    }
}
