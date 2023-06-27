<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->bigIncrements('id')->from(1001);
            $table->string('ua_title')->nullable();
            $table->string('en_title')->nullable();
            $table->string('alias')->nullable();
            $table->longText('synopsis')->nullable();
            $table->year('aired')->nullable();
            $table->string('country')->nullable();
            $table->integer('episodes')->nullable();
            $table->integer('total_episodes')->nullable();
            $table->string('director')->nullable();
            $table->string('studio')->nullable();
            $table->string('translated')->nullable();
            $table->time('duration')->nullable();
            $table->string('trailer')->nullable();
            $table->boolean('active')->default(1);
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
        Schema::dropIfExists('animes');
    }
};
