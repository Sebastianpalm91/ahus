<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Issue;
use App\Location;

class Campus extends Model
{
    protected $table = 'campus';
    protected $fillable = ['name'];

    function issues() {
        return $this->hasMany('App\Issue');
    }

    function buildings() {
        return $this->hasMany('App\Location');
    }
}
