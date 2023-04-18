<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function registered(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->assignRole('Visitor');

        $token = $user->createToken('main')->plainTextToken;

        event(new Registered($user));

        Auth::login($user);

        return response([
            'user' => $user,
            'token' => $token,

        ]);
    }


    public function login(LoginRequest $request)
    {
        // $credentials = $request->validated();
        // $remember = $credentials['remember'] ?? false;
        // unset($credentials['remember']);

        // if (!Auth::attempt($credentials, $remember)) {
        //     throw ValidationException::withMessages([
        //         'password' => ['Перевірте дані для входу'],
        //     ]);
        // }

        // $user = Auth::user();
        // $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user' => $user,
        //     'token' => $token,

        // ]);

        $request->authenticate();

        $request->session()->regenerate();

        /** @var \App\Models\User $user **/
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user->load('roles'),
            'token' => $token,

        ]);
    }



    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response([
            'status' => 'success',
        ]);
    }

    public function user(Request $request)
    {
        $user = $request->user()->with('roles');
        return $user;
    }
}
