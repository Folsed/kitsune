<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            ['en_name' => 'Action', 'name' => 'Екшн'],
            ['en_name' => 'Adventure', 'name' => 'Пригоди'],
            ['en_name' => 'Comedy', 'name' => 'Комедія'],
            ['en_name' => 'Drama', 'name' => 'Драма'],
            ['en_name' => 'Fantasy', 'name' => 'Фентезі'],
            ['en_name' => 'Horror', 'name' => 'Жахи'],
            ['en_name' => 'Mecha', 'name' => 'Меха'],
            ['en_name' => 'Mystery', 'name' => 'Містика'],
            ['en_name' => 'Romance', 'name' => 'Романтика'],
            ['en_name' => 'Sci-Fi', 'name' => 'Наукова фантастика'],
            ['en_name' => 'Seinen', 'name' => 'Сейнен'],
            ['en_name' => 'Sports', 'name' => 'Спорт'],
            ['en_name' => 'Supernatural', 'name' => 'Надприродне'],
            ['en_name' => 'Thriller', 'name' => 'Трилер'],
            ['en_name' => 'Psychological', 'name' => 'Психологічний'],
            ['en_name' => 'Music', 'name' => 'Музика'],
            ['en_name' => 'Historical', 'name' => 'Історичний'],
            ['en_name' => 'Subtitles', 'name' => 'Субтитри'],
            ['en_name' => 'Shoujo', 'name' => 'Шодзьо'],
            ['en_name' => 'Shounen', 'name' => 'Шьонен'],
        ];

        DB::table('genres')->insert($genres);
    }
}
