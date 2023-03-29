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
            'Бойовик',
            'Комедія',
            'Драма',
            'Фентезі',
            'Жахи',
            'Меха',
            'Романтика',
            'Наукова фантастика',
            'Спорт',
            'Пригоди',
            'Трилер',
            'Історичний',
            'Містика',
            'Музичний',
            'Психологічний',
            'Шкільний',
            'Сейнен',
            'Хентай',
            'Етті',
            'Сеннен',
            'Йояй',
            'Бара',
            'Гурлит',
            'Дзайн',
            'Демони',
            'Зомбі',
        ];

        foreach ($genres as $genre) {
            DB::table('genres')->insert([
                'name' => $genre,
            ]);
        }
    }
}
