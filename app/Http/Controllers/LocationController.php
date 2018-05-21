<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Location;
use App\Campus;
use App\City;

class LocationController extends Controller
{
    public function get() {
        $locations = Location::get();

        foreach ($locations as $location => $value) {
            $locations[$location]['campus'] = Campus::find($value['campus_id']);
            $locations[$location]['campus']['city'] = City::find($locations[$location]['campus']['id']);
        }

        return response()->json([
            'locations' => $locations
        ]);
    }

    public function campus($id = null){
        $campus = Campus::get();
        
        foreach ($campus as $camp => $value) {
            $campus[$camp]['city'] = City::find($value['city_id']);
        }

        return response()->json([
            'campus' => $campus
        ]);
    }
}
