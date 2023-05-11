<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pronoun;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class UserController extends Controller
{
    public function user(Request $request)
    {
        $user = $request->user()->with('roles');
        return $user;
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

        $avatarPath = 'images/avatars/';
        if($request->hasFile('avatar')) {
            $avatarFilename = $request->file('avatar')->hashName();

            if ($user->avatar && Storage::exists($user->avatar)) {
                Storage::delete($user->avatar);
            }
            $avatar = Image::make($request->file('avatar'))->resize(200, 200);

            $avatar->storeAs($avatarPath, $avatarFilename);

            $user->avatar = (string)$avatarPath . $avatarFilename;
        }

        $user->save();

        return response()->json([
            'user' => $user->load('roles'),
        ]);
    }
}
