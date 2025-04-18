<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'en_name',
    ];

    public function animes()
    {
        return $this->belongsToMany(Anime::class, 'anime_genres');
    }
}
