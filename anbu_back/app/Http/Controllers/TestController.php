<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestController extends Controller
{
    public function __construct()
    {
        Storage::disk('public')->put('example11231.txt', 'asa');
    }

    public function index()
    {
        // echo asset('storage/file.txt');
        return Storage::path('example11231.txt');
    }
}
