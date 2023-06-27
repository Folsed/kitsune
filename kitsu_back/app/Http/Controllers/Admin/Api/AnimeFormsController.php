<?php

namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnimeResource;
use App\Models\Anime;
use App\Models\AnimeSeries;
use App\Models\Banner;
use App\Models\Carousel;
use App\Models\Genre;
use App\Models\Preview;
use App\Models\Promo;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AnimeFormsController extends Controller
{
    public function index(Request $request)
    {
        $query = Anime::orderBy('created_at', 'desc')->paginate($request->size);
        $result = response()->json([
            'data' => AnimeResource::collection($query),
            'total' => $query->total(),
        ]);
        return $result;
    }

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
            'second_preview' => 'required|image|mimes:webp,png,svg,jpeg,avif',
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
        $secondPreviewPath = 'images/anime/second_previews/';
        $subPreviewPath = 'images/anime/sub_previews/';
        $logoPath = 'images/anime/logos/';

        if ($request->hasFile('preview') && $request->hasFile('sub_preview') && $request->hasFile('logo')) {
            // Preview
            $previewFilename = $request->file('preview')->hashName();
            // Preview
            $secondPreviewFilename = $request->file('second_preview')->hashName();
            // Sub-Preview
            $subPreviewFilename = $request->file('sub_preview')->hashName();
            // Logo
            $logoFilename = $request->file('logo')->hashName();
            // Put in Storage
            $request->preview->storeAs($previewPath, $previewFilename);
            $request->second_preview->storeAs($secondPreviewPath, $secondPreviewFilename);
            $request->sub_preview->storeAs($subPreviewPath, $subPreviewFilename);
            $request->logo->storeAs($logoPath, $logoFilename);
            // Put in Database
            $preview = new Preview();
            $preview->anime_id = $anime->id;
            $preview->preview_path = (string)$previewPath . $previewFilename;
            $preview->second_preview_path = (string)$secondPreviewPath . $secondPreviewFilename;
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
        return response()->json(['status' => true]);
    }

    public function deactivate(Request $request)
    {
        $anime = Anime::findOrFail($request->id);
        $anime->active = $anime->active ? false :  true;
        $anime->save();
        return response()->json(['status' => true]);
    }

    public function carouselMutate(Request $request)
    {
        $this->validate($request, [
            'anime_id' => 'required',
            'slide' => 'required|image',
        ]);

        if ($request->hasFile('slide')) {
            $carousel = new Carousel();
            $slidePath = 'images/anime/carousel/';
            // slide
            $slideFilename = $request->file('slide')->hashName();
            // Put in Storage
            $request->slide->storeAs($slidePath, $slideFilename);
            // Put in Database
            $carousel->anime_id = $request->input('anime_id');
            $carousel->content_path = (string)$slidePath . $slideFilename;
            $carousel->save();
        }

        return response()->json([
            'status' => true,
        ]);
    }

    public function bannerCreate(Request $request)
    {
        $this->validate($request, [
            'anime_id' => 'required',
            'png_preview' => 'required|image|mimes:png',
        ]);

        $banner = new Banner();
        $banner->anime_id = $request->input('anime_id');

        $pngPreviewPath = 'images/anime/png_previews/';
        if ($request->hasFile('png_preview')) {
            $pngPreviewFilename = $request->file('png_preview')->hasnHame();
            $request->png_preview->storeAs($pngPreviewPath, $pngPreviewFilename);
            $banner->png_preview = (string)$pngPreviewPath . $pngPreviewFilename;
            $banner->save();
        }

        return response([
            'status' => 'success',
        ]);
    }

    public function promoCreate(Request $request)
    {
        $this->validate($request, [
            'anime_id' => 'required',
            'promo' => 'required|image|mimes:webp,png,svg,jpeg,avif',
        ]);
        $promo = new Promo();
        $promo->anime_id = $request->input('anime_id');

        $promoPath = 'images/anime/promo/';
        if ($request->hasFile('promo')) {
            $promoFilename = $request->file('promo')->hashName();

            $request->promo->storeAs($promoPath, $promoFilename);

            $promo->promo_path = (string)$promoPath . $promoFilename;

            $promo->save();
        }

        return response([
            'status' => 'success',
        ]);
    }

    public function createAnimeSeries(Request $request)
    {
        $request->validate([
            'anime_id' => 'required',
            // 'series' => 'required',
        ]);
        $series = new AnimeSeries();
        $series->anime_id = $request->input('anime_id');
        $series->series_number = null;

        // if ($request->hasFile('series')) {
        //     $video = $request->file('series');
        //     $fileName = $request->file('series')->hashName();
        //     $video->storeAs('videos/series', $fileName);

        //     $series->video = 'videos/series/' . $fileName;
        //     $series->save();
        // }
        $fileName = Str::random(40) . '.mp4';
        $series->video = 'videos/series/' . $fileName;
        $series->save();
        return response()->json(['status' => true]);
    }
}
