<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    use HasFactory;

    protected $table = 'carousel';

    protected $fillable = [
        'anime_id',
        'content_path',
    ];

    public function animes()
    {
        return $this->hasMany(Anime::class, 'id', 'anime_id');
    }
}
