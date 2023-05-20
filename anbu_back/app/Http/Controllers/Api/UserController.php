<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WatchlistResource;
use App\Models\AnimeSeries;
use App\Models\Pronoun;
use App\Models\Review;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;


class UserController extends Controller
{
    public function user()
    {
        // $imageFiles = Storage::files('images/anime/second_previews');

        // foreach ($imageFiles as $file) {
        //     $filename = substr(basename($file), 0, 4);

        //     $previewExists = DB::table('previews')
        //         ->where('anime_id', $filename)
        //         ->exists();

        //     $preview = DB::table('previews')
        //         ->where('anime_id', $filename)
        //         ->first();

        //     if (!$previewExists && empty($preview->second_preview_path)) {
        //         return DB::table('previews')->where('anime_id', $filename)->update([
        //             'second_preview_path' => $file
        //         ]);
        //     }
        // }

        // Get all the files in the previews directory
        $files = File::files(storage_path('app/images/anime/previews'));

        // Loop through each file and rename it to a hash name
        foreach ($files as $file) {
            $originalPath = $file->getPathname();
            $extension = $file->getExtension();


            $originalFilename = pathinfo($originalPath, PATHINFO_FILENAME).$extension;

            echo 'images/anime/previews/'.$originalFilename . '<br>';
        }
    }

    public function getPronouns()
    {
        return response()->json([
            'data' => [
                'pronouns' => Pronoun::all(),
            ]
        ]);
    }

    public function updateInfo(Request $request)
    {
        /** @var \App\Models\User $user **/
        $user = Auth::user();

        $user->name = $request->input('new_name');
        $user->pronoun = $request->input('new_pronoun');
        $user->bio = $request->input('new_bio');

        if ($request->hasFile('avatar')) {
            $avatarPath = 'images/avatars/fullsize/';
            $softAvatarPath = 'images/avatars/softsize/';
            $avatarFilename = $request->file('avatar')->hashName();
            $softAvatarFilename = $request->file('avatar')->hashName();

            if ($user->avatar && Storage::exists($user->avatar)) {
                Storage::delete($user->avatar);
                Storage::delete($user->avatar_softsize);
            }

            $image = Image::make($request->file('avatar'));
            $imageSoft = Image::make($request->file('avatar'));
            $image->resize(600, 600, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $imageSoft->resize(100, 100, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $image->save(public_path($avatarPath . $avatarFilename));
            $imageSoft->save(public_path($softAvatarPath . $softAvatarFilename));

            $user->avatar = (string)$avatarPath . $avatarFilename;
            $user->avatar_softsize = (string)$softAvatarPath . $softAvatarFilename;
        }

        $user->save();

        return response()->json([
            'user' => $user->load('roles'),
        ]);
    }



    public function addToWatchlist(Request $request)
    {
        $user_id = $request->input('user_id');
        $anime_id = $request->input('anime_id');

        DB::transaction(function () use ($user_id, $anime_id) {
            $existingWatchlist = Watchlist::with(['user', 'anime'])
                ->where('user_id', $user_id)
                ->where('anime_id', $anime_id)
                ->first();

            if ($existingWatchlist) {
                $existingWatchlist->delete();
            } else {
                $watchlist = new Watchlist();
                $watchlist->user_id = $user_id;
                $watchlist->anime_id = $anime_id;
                $watchlist->save();
            }
        });

        return response()->json([
            'mylist' => Watchlist::where('user_id', $user_id)->pluck('anime_id'),
        ]);
    }

    public function getMyList($userId)
    {
        return response()->json([
            'mylist' => WatchlistResource::collection(
                Watchlist::with(['user', 'anime'])
                    ->where('user_id', $userId)
                    ->orderByDesc('created_at')
                    ->get()
            )
        ]);
    }

    public function soloReview($animeId)
    {
        /** @var \App\Models\User $user **/
        $user = Auth::user();

        return response()->json([
            'stars' => Review::where('user_id', $user->id)
                ->where('anime_id', $animeId)
                ->pluck('stars'),
        ]);
    }


}
