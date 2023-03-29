<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;

    protected $fillable = [
        'ua_title',
        'en_title',
        'aired',
        'country',
        'episodes',
        'total_episodes',
        'director',
        'studio',
        'translated',
        'duration',
        'synopsis',
        'trailer',
    ];

    public function previews()
    {
        return $this->hasMany(Preview::class, 'anime_id', 'id');
    }

    public function screenshots()
    {
        return $this->hasMany(Screenshot::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->orderBy('created_at', 'desc');
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'anime_genres');
    }
}
