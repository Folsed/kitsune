<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'reviews';

    public function anime()
    {
        return $this->belongsToMany(Anime::class);
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'reviews', 'id', 'user_id');
    }
}
