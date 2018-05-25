<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Campus;
use App\Issue;

class Location extends Model
{
    protected $fillable = ['name'];

    function campus() {
        return $this->belongsTo('App\Campus');
    }

    function issues() {
        return $this->hasMany('App\Issue');
    }
}
