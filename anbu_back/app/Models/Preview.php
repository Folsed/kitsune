<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preview extends Model
{
    use HasFactory;

    protected $fillable = [
        'preview_path',
        'sub_preview_path',
        'logo_path',
    ];

    public function anime()
    {
        return $this->belongsTo(Anime::class);
    }
}
