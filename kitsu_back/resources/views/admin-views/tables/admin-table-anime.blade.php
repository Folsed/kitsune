@extends('layouts.admin')

@section('adminContent')
    <section class="content">
        {{-- <div class="catalog-main">
            <div class="post-card-wrapper">
                <div class="cards">
                    @foreach ($data as $recently)
                        <div class="admin-card">
                            @foreach ($recently->previews as $preview)
                                <div class="card-preview">
                                    <a href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}"><img
                                            class="item-preview" src="{{ asset($preview->preview_path) }}" alt="">
                                    </a>
                                </div>
                            @endforeach
                            <div class="card-desc">
                                <div class="title">
                                    <a
                                        href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}">{{ $recently->title }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    @foreach ($data as $recently)
                        <div class="admin-card">
                            @foreach ($recently->previews as $preview)
                                <div class="card-preview">
                                    <a href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}"><img
                                            class="item-preview" src="{{ asset($preview->preview_path) }}" alt="">
                                    </a>
                                </div>
                            @endforeach
                            <div class="card-desc">
                                <div class="title">
                                    <a
                                        href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}">{{ $recently->title }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
        </div> --}}

        <div class="content-wrapper">
            <div class="page-info">
                <div class="page-info__location">
                    <h6><span style="color:rgb(0, 241, 141);">TABLES/</span>ANIME</h6>
                    <h4 class="">Anime tables:</h4>
                </div>
                <div class="shalf"></div>
            </div>

            <div class="table__container">
                <div class="card-body">
                    <div class="row mb-n3">
                        <div class="col-xl-16">
                            <div class="small text-white text-opacity-50 mb-3"><b>DEFAULT TABLE</b></div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">active</th>
                                            <th scope="col">ua_title</th>
                                            <th scope="col">en_title</th>
                                            <th scope="col">alias</th>
                                            <th scope="col">synopsis</th>
                                            <th scope="col">aired</th>
                                            <th scope="col">country</th>
                                            <th scope="col">episodes</th>
                                            <th scope="col">total_episodes</th>
                                            <th scope="col">director</th>
                                            <th scope="col">studio</th>
                                            <th scope="col">translated</th>
                                            <th scope="col">duration</th>
                                            <th scope="col">trailer</th>
                                            <th scope="col">created_at</th>
                                            <th scope="col">updated_at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($data as $anime_info)
                                            <tr>
                                                <th scope="row">{{ $anime_info->id }}</th>
                                                <td>{{ $anime_info->active }}</td>
                                                <td>{{ $anime_info->ua_title }}</td>
                                                <td>{{ $anime_info->en_title }}</td>
                                                <td>{{ $anime_info->alias }}</td>
                                                <td>{{ $anime_info->synopsis }}</td>
                                                <td>{{ $anime_info->aired }}</td>
                                                <td>{{ $anime_info->country }}</td>
                                                <td>{{ $anime_info->episodes }}</td>
                                                <td>{{ $anime_info->total_episodes }}</td>
                                                <td>{{ $anime_info->director }}</td>
                                                <td>{{ $anime_info->studio }}</td>
                                                <td>{{ $anime_info->translated }}</td>
                                                <td>{{ $anime_info->duration }}</td>
                                                <td>{{ $anime_info->trailer }}</td>
                                                <td>{{ $anime_info->created_at }}</td>
                                                <td>{{ $anime_info->updated_at }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </section>
@endsection
