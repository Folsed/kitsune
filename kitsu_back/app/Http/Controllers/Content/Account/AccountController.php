<?php

namespace App\Http\Controllers\Content\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class AccountController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            return view('account.account-info', ['currentuser' => User::find($id), 'role' => User::find($id)->getRoleNames()]);
        }
    }
}
