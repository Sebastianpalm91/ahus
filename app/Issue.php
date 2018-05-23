<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Campus;

class Issue extends Model
{
    protected $fillable = ['title', 'body', 'location', 'name'];

    function campus() {
        return $this->belongsTo('App\Campus');
    }
}
