<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Models\Anime;
use App\Models\Genre;
use App\Models\Preview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnimeFormsController extends Controller
{
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
            'synopsis' => 'required',
            'trailer' => 'required',
            'genres' => 'required',
            'preview' => 'required|image|mimes:webp,png,svg,jpeg,avif',
            'sub_preview' => 'required|image|mimes:webp,png,svg,jpeg,avif',
            'logo' => 'required|image|mimes:webp,png,svg,jpeg,avif',
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
        $anime->synopsis = $request->input('synopsis');
        $anime->trailer = $request->input('trailer');
        $anime->active = $request->input('active');
        $anime->save();

        // // Genres
        $genres = Genre::whereIn('id', $request->genres)->pluck('id')->toArray();
        $anime->genres()->sync($genres);

        // Preview, Sub-preview, Logo
        $previewPath = 'images/anime/previews/';
        $subPreviewPath = 'images/anime/sub-previews/';
        $logoPath = 'images/anime/logos/';

        if ($request->hasFile('preview') && $request->hasFile('sub_preview') && $request->hasFile('logo')) {
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

        return response([
            'status' => 'success',
        ]);
    }

    public function destroy(Request $request)
    {
        Anime::destroy($request->id);

        return response([
            'status' => 'success',
        ]);
    }
}
