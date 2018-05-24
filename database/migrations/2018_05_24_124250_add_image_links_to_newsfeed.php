<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddImageLinksToNewsfeed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('newsfeed', function (Blueprint $table){
            $table->string('imageheader')->after('location');
            $table->string('imageicon')->after('location');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('newsfeed', function (Blueprint $table){
            $table->dropColumn('imageheader');
            $table->dropColumn('imageicon');
        });
    }
}
