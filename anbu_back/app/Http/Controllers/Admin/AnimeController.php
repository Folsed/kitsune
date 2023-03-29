<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Anime;
use App\Models\Preview;
use App\Models\Screenshot;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Console\Input\Input;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return view('admin-views.admin-addpost');
        // $previews = Anime::find(1002)->previews;

        // foreach ($previews as $preview) {
        //     return $preview->preview_path;
        // }

    }


    public function formsView()
    {
        return view('admin-views.forms.admin-form-anime');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // $this->validate($request, [
        //     // 'preview' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        //     'screenshot' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        // ]);

        $anime = new Anime;
        $anime->title = $request->input('title');
        $anime->alias = $request->input('alias');
        $anime->description = $request->input('description');
        $anime->release_year = $request->input('release_year');
        $anime->country = $request->input('country');
        $anime->director = $request->input('director');
        $anime->duration = $request->input('duration');
        $anime->videoYoutubeId = $request->input('videoYoutubeId');
        $anime->save();

        // Preview
        $filename = $anime->id . '-' . $anime->alias . '.jpg';
        $path = 'images/' . $anime->id . '-' . $anime->alias . '/preview/';
        $existsCheck = 1;

        if ($request->hasFile('preview')) {
            $extension = $request->file('preview')->extension();
            while (Storage::exists($path . '/' . $filename)) {
                $filename = $anime->id . '-' . $anime->alias . ' (' . $existsCheck . ') ' . '.' . $extension;
                $existsCheck++;
            }
            $request->preview->storeAs($path, $filename);

            $preview = new Preview();
            $preview->anime_id = $anime->id;
            $preview->preview_path = (string)$path . $filename;
            $preview->save();
        }

        // Screenshots
        $path = 'images/' . $anime->id . '-' . $anime->alias . '/screenshots/';

        if ($request->hasFile('screenshot')) {
            foreach ($request->file('screenshot') as $file) {
                if ($request->hasFile('screenshot')) {
                    $extension = $file->extension();
                    $filename = $anime->id . '-' . $anime->alias . '-Screen' . $existsCheck . '.' . $extension;
                    $file->storeAs($path, $filename);
                    $existsCheck++;

                    $screenshot = new Screenshot();
                    $screenshot->anime_id = $anime->id;
                    $screenshot->screenshot_path = (string)$path . $filename;
                    $screenshot->save();
                }
            }
        }

        return redirect()->route('admin-addpost');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('admin-views.tables.admin-table-anime', ['data' => Anime::all()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
