<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimeSeries extends Model
{
    use HasFactory;

    protected $table = 'anime_series';

    public function anime()
    {
        $this->belongsTo(Anime::class);
    }
}
