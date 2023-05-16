<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Anime;
use App\Models\Genre;
use App\Models\Preview;
use App\Models\Screenshot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AnimeFormsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $genres = Genre::all();
        return view('admin-views.forms.admin-form-anime', compact('genres'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'ua_title' => 'required',
            'en_title' => 'required',
            'aired' => 'required',
            'country' => 'required',
            'episodes' => 'required',
            'total_episodes' => 'required',
            'director' => 'required',
            'studio' => 'required',
            'translated' => 'required',
            'duration' => 'required',
            'synopsis' => 'required',
            'trailer' => 'required',
            'genres' => 'required',
            'preview' => 'required|file|image|mimes:webp,png,svg,jpeg,avif',
            'sub_preview' => 'required|file|image|mimes:webp,png,svg,jpeg,avif',
            'logo' => 'required|file|image|mimes:webp,png,svg,jpeg,avif',
            // 'screenshot' => 'required|file|image|mimes:webp,png,svg,jpeg,avif',
        ]);

        $anime = new Anime();
        $anime->ua_title = $request->input('ua_title');
        $anime->en_title = $request->input('en_title');
        $anime->alias = preg_replace('/[^\pL\d]+/u', '-', strtolower($anime->en_title));
        $anime->aired = $request->input('aired');
        $anime->country = $request->input('country');
        $anime->episodes = $request->input('episodes');
        $anime->total_episodes = $request->input('total_episodes');
        $anime->director = $request->input('director');
        $anime->studio = $request->input('studio');
        $anime->translated = $request->input('translated');
        $anime->duration = $request->input('duration');
        $anime->synopsis = $request->input('synopsis');
        $anime->trailer = $request->input('trailer');
        $anime->save();

        // // Categories
        $genres = Genre::whereIn('name', $request->input('genres'))->pluck('id')->toArray();
        $anime->genres()->sync($genres);


        // // Preview, Sub-preview
        $previewPath = 'images/anime/previews/';
        $subPreviewPath = 'images/anime/sub-previews/';
        $logoPath = 'images/anime/logos/';

        if ($request->hasFile('preview') && $request->hasFile('sub_preview')) {
            // Preview
            $previewExtension = $request->file('preview')->extension();
            $previewFilename = $anime->id . '-' . $anime->alias . '.' . $previewExtension;

            // Sub-Preview
            $subPreviewExtension = $request->file('sub_preview')->extension();
            $subPreviewFilename = $anime->id . '-' . $anime->alias . '.' . $subPreviewExtension;

            // Logo
            $logoExtension = $request->file('logo')->extension();
            $logoFilename = $anime->id . '-' . $anime->alias . '.' . $logoExtension;

            // Put in Storage
            $request->preview->storeAs($previewPath, $previewFilename);
            $request->sub_preview->storeAs($subPreviewPath, $subPreviewFilename);
            $request->logo->storeAs($logoPath, $logoFilename);

            // Put in Database
            $preview = new Preview();
            $preview->anime_id = $anime->id;
            $preview->preview_path = (string)$previewPath . $previewFilename;
            $preview->sub_preview_path = (string)$subPreviewPath . $subPreviewFilename;
            $preview->logo_path = (string)$logoPath . $logoFilename;
            $preview->save();
        }

        // // Screenshots
        $screenshotsPath = 'images/anime/screenshots/';
        $existsCheck = 1;

        if ($request->hasFile('screenshot')) {
            foreach ($request->file('screenshot') as $file) {
                $screenshotExtension = $file->extension();
                $screenshotFilename = $anime->id . '-' . $anime->alias . '-screenshot(' . $existsCheck . ')' . '.' . $screenshotExtension;
                $file->storeAs($screenshotsPath, $screenshotFilename);
                $existsCheck++;

                $screenshot = new Screenshot();
                $screenshot->anime_id = $anime->id;
                $screenshot->screenshot_path = (string)$screenshotsPath . $screenshotFilename;
                $screenshot->save();
            }
        }

        return back();
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
    public function show($id)
    {
        //
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
