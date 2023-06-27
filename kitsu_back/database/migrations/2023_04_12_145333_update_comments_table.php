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
        Schema::table('comments', function (Blueprint $table) {
            $table->unsignedBigInteger('user_reply_id')->after('comment')->nullable();
            $table->foreign('user_reply_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->longText('reply')->after('user_reply_id')->nullable();
            $table->bigInteger('likes')->after('reply')->default(0);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
