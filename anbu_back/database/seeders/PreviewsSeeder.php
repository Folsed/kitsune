<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class PreviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Get all the files in the previews directory
        $files = File::files(storage_path('app/images/anime/second_previews'));

        // Loop through each file and insert its path into the previews table
        foreach ($files as $file) {
            $filename = substr(basename($file), 0, 4);
            DB::table('previews')
                ->where('anime_id', $filename)
                ->update(['second_preview_path' => 'images/anime/second_previews/' . $file->getFilename()]);
        }
    }
}
