<?php

namespace Database\Seeders;

use App\Models\Anime;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $animes = Anime::all();

        foreach ($users as $user) {
            $reviewed_animes = [];
            for ($i = 0; $i < 5; $i++) {
                $anime = $animes->random();
                while (in_array($anime->id, $reviewed_animes)) {
                    $anime = $animes->random();
                }
                $reviewed_animes[] = $anime->id;

                DB::table('reviews')->insert([
                    'user_id' => $user->id,
                    'anime_id' => $anime->id,
                    'stars' => rand(2, 5),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
