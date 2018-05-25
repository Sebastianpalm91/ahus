<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Campus;
use App\Location;

class Issue extends Model
{
    protected $fillable = ['title', 'body', 'location', 'name'];

    function campus() {
        return $this->belongsTo('App\Campus');
    }

    function location(){
        return $this->belongsTo('App\Location');
    }
}
