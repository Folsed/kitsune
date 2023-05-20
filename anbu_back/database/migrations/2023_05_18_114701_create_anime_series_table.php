<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('anime_series', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('anime_id');
            $table->unsignedInteger('series_number');
            $table->string('video');
            $table->timestamps();

            $table->unique(['anime_id', 'series_number']);
            $table->foreign('anime_id')
                ->references('id')
                ->on('animes')
                ->onDelete('cascade');
        });

        // Set series_number to start with 1 for each anime_id
        DB::unprepared('
            CREATE TRIGGER set_initial_series_number
            BEFORE INSERT ON anime_series
            FOR EACH ROW
            BEGIN
                IF NEW.series_number IS NULL THEN
                    SET NEW.series_number = (SELECT IFNULL(MAX(series_number), 0) + 1 FROM anime_series WHERE anime_id = NEW.anime_id);
                END IF;
            END
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anime_series');
    }
};
