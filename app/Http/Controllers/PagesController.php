<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Issue;
use App\NewsFeed;

class PagesController extends Controller
{
    public function user()
    {
        $user = User::get();

        return response()->json([
            'users' => $user,
        ]);
    }

    public function issue($id = null)
    {
        if($id === null){
            $issue = Issue::get();
        }
        else if(Issue::find($id) || abort(500)) $issue = Issue::where('id', $id)->get();
         

        return response()->json([
            'issues' => $issue,
        ]);
    }
    public function news()
    {
        $news = NewsFeed::get();

        // $news = NewsFeed::table('newsfeed')
        //     ->leftJoin('users', 'id', '=', 'newsfeed.author_id')
        //     ->get();

        return response()->json([
            'news' => $news,
        ]);
    }
}
