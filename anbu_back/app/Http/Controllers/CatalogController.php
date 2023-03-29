<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests\CatalogRequest;
use App\Models\Anime;


class CatalogController extends Controller
{
    public function submit(Request $request)
    {
        $catalog = new Anime();
        $catalog->name = $request->input('name');
        $catalog->year = $request->input('year');
        $catalog->director = $request->input('director');
        $catalog->duration = $request->input('duration');
        $catalog->voice = $request->input('voice');
        $catalog->description = $request->input('description');

        $catalog->save();
        return redirect()->route('admin-catalog');
    }

    public function showAllPosts()
    {
        return view('admin-views.tables.admin-table-anime', ['data' => Anime::all()]);
    }

}
