<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLongLatToCampus extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('campus', function (Blueprint $table) {
            $table->string('longitude');
            $table->string('latitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('campus', function (Blueprint $table) {
            $table->dropColumn('longitude');
            $table->dropColumn('latitude');
        });
    }
}
