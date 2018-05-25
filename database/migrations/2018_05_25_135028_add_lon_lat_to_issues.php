<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLonLatToIssues extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('issue', function(Blueprint $table){
            $table->string('latitude')->after('location');
            $table->string('longitude')->after('location');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('issue', function(Blueprint $table){
            $table->dropColumn('latitude');
            $table->dropColumn('longitude');
        });
    }
}
