<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsFeed extends Model
{
    protected $table = 'newsfeed';

    // protected $fillable = ['author_id' => User::where('id', $this->author()->id)];


    public function author()
    {
        return $this->belongsTo(User::class);
    }

}
