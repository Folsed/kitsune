<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Screenshot extends Model
{
    use HasFactory;

    protected $fillable = [
        'screenshot_path',
    ];

    public function anime()
    {
        return $this->belongsTo(Anime::class);
    }
}
