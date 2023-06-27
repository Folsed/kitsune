<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\Anime;
use App\Models\Comment;
use App\Models\Preview;
use App\Models\Screenshot;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createComment(Request $request, $id, $alias)
    {
        $comment = new Comment();
        $comment->user_id = Auth::user()->id;
        $comment->anime_id = Anime::findOrFail($id)->id;
        $comment->comment = $request->input('comment');
        $comment->save();

        return redirect()->route('anime', ['id' => $id, 'alias' => $alias]);
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
    public static function show($id)
    {
        return view('main-views.anime', [
            'data' => Anime::with(['previews', 'screenshots', 'comments'])->findOrFail($id),
            // 'role' => User::find($userId)->hasRole('admin'),
        ]);
    }

    public static function showTrendingAnime()
    {
        $data = Http::get('https://kitsu.io/api/edge/trending/anime?limit=6')
            ->json('data');
        return $data;
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
