<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 100; $i++) {
            $name = Str::random(16);
            $email = $name.'@example.com';
            $password = Hash::make(Str::random(16));

            DB::table('users')->insert([
                'name' => $name,
                'email' => $email,
                'password' => $password,
            ]);
        }
    }
}
