<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pronoun;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        $user->save();

        return response()->json([
            'user' => $user->load('roles'),
        ]);
    }
}
