<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Location;
use App\Campus;

class LocationController extends Controller
{
    public function get() {
        $locations = Location::get();

        foreach ($locations as $location => $value) {
            $locations[$location]['campus'] = Campus::where('id', $value['campus_id'])->first();
        }

        return response()->json([
            'locations' => $locations
        ]);
    }
}
