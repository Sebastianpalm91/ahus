<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableIssues extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
     {
         Schema::create('issues', function (Blueprint $table) {
             $table->increments('id');
             $table->string('title');
             $table->text('body');
             $table->unsignedInteger('campus_id');
             $table->foreign('campus_id')->references('id')->on('campus');
             $table->string('location');
             $table->string('name');
             $table->string('phone');
             $table->string('email');
             $table->timestamps();
         });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         Schema::dropIfExists('issues');
     }
}
