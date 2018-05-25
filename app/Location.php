<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Campus;

class Location extends Model
{
    protected $fillable = ['name'];

    function campus() {
        return $this->belongsTo('App\Campus');
    }
}
