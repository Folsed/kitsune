@extends('layouts.main')

@section('title')
    News
@endsection

@section('content')
    <div class="container">
        @foreach ($data as $data)
        <div class="row">
            <img src="{{ Vite::asset('resources/img/hero/hero-1.jpg') }}" alt="">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ $data['videoYoutubeId'] }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        @endforeach

    </div>
@endsection

