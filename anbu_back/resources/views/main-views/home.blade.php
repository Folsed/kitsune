@extends('layouts.main')

@section('title')
    Home
@endsection

@section('content')
    <!-- Slider section -->
    <div class="slide-box">
        <div id="header_img">
            <div class="header_img">
                <noindex>
                    <div class="slide_block clearfix">
                        <div class="slide_arrow left_arrow"></div>
                        <div class="slide_arrow right_arrow"></div>
                        <div class="slide_bg"></div>
                        <div class="slide_bg_1"></div>
                        <div class="slide_body">
                            <div class="slide_cont" target="_blank">
                                <a href="/4183-vinland-saga-season-2.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/1.png') }}" title=""></a>
                            </div>
                            <div class="slide_cont" target="_blank">
                                <a href="/4193-sugar-apple-fairy-tale.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/2.png') }}" title=""></a>
                            </div>
                            <div class="slide_cont" target="_blank">
                                <a href="/4195-ooyukiumi-no-kaina.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/3.png') }}" title=""></a>
                            </div>
                            <div class="slide_cont" target="_blank">
                                <a href="/4174-nier-automata-ver-11a.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/4.png') }}" title=""></a>
                            </div>
                            <div class="slide_cont" target="_blank">
                                <a href="/4014-isekai-ojisan.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/5.png') }}" title=""></a>
                            </div>
                            <div class="slide_cont" target="_blank" ">
                                                                    <a href=" /4118-urusei-yatsura-2022.html" target="_blank" title=""><img
                                                                            src="{{ Vite::asset('resources/img/slider/slides/6.png') }}" title=""></a>
                                                                </div>
                                                                <div class="slide_cont" target="_blank"">
                                <a href=" /4163-tomo-chyan-dvchina.html" target="_blank" title=""><img
                                        src="{{ Vite::asset('resources/img/slider/slides/7.png') }}" title=""></a>
                            </div>
                        </div>
                    </div>
                </noindex>
            </div>
        </div>
    </div>
    <!-- End Slider Section -->



    <div class="content">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-12">
                    <h2 class="section-title">Welcome to Our site</h2>
                    <h3 class="section-sub-title">watch anime online in high quality</h3>
                </div>
            </div>
            <div class="anime-container">
                <div class="row">
                    <div class="col-lg-12 col-md-6">
                        <div class="tabs-menu-box">
                            <ul class="nav tabs-menu">
                                <li class="tab-item active">Recently</li>
                                <li class="tab-item">Trending</li>
                                <li class="tab-item">Most Viewed</li>
                                <li class="tab-item">Top Rated</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tab-panel">
                    <div class="col-12">
                        <div class="panel-item active">
                            <div class="row">
                                @foreach ($data as $recently)
                                    <div class="col-3">
                                        <div class="block2 hd">
                                            @foreach ($recently->previews as $preview)
                                                <div class="block2-preview">
                                                    <a
                                                        href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}"><img
                                                            class="item-preview" src="{{ asset($preview->preview_path) }}"
                                                            alt="">
                                                    </a>
                                                </div>
                                            @endforeach
                                            <div class="block2-desc">
                                                <div class="desc-child">
                                                    <div class="title">
                                                        <a href="{{ route('anime', ['id' => $recently->id, 'alias' => $recently->alias]) }}">{{ $recently->ua_title }}</a>
                                                    </div>
                                                    <div class="stars">
                                                        *********
                                                    </div>
                                                    <span class="text-uppercase">Total episode 12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                        </div>
                        <div class="panel-item">
                            <div class="row">
                                @foreach ($data as $trending)
                                    <div class="col-3">
                                        <div class="block2 hd">
                                            @foreach ($trending->previews as $preview)
                                                <div class="block2-preview">
                                                    <a
                                                        href="{{ route('anime', ['id' => $trending->id, 'alias' => $trending->alias]) }}"><img
                                                            class="item-preview" src="{{ asset($preview->preview_path) }}"
                                                            alt="">
                                                    </a>
                                                </div>
                                            @endforeach
                                            <div class="block2-desc">
                                                <div class="desc-child">
                                                    <div class="title">
                                                        <a href="{{ route('anime', ['id' => $trending->id, 'alias' => $trending->alias]) }}">{{ $trending->title }}</a>
                                                    </div>
                                                    <div class="stars">
                                                        *********
                                                    </div>
                                                    <span class="text-uppercase">Total episode 12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach

                            </div>
                        </div>
                        <div class="panel-item">Content3</div>
                        <div class="panel-item">Content4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="coming-soon parallax" style="background-image: url('{{ Vite::asset('resources/img/coming-soon/coming_soon4k.jpg') }}');">
        <div class="shadow-soon">
            <div class="container mar">
                <div class="row">
                    <div class="col-12">
                        <h4>under construction</h4>
                        <h3>We're Coming soon</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 m-auto">
                        <!-- If you need change timer values - welcome to @./js/coming-soon-counter -->
                        <div class="flip-clock">
                            <div class="countdown">000 <span>:</span> 00 <span>:</span> 00 <span>:</span> 00
                            </div>
                            <div class="countdown-info">
                                <p>Days</p>
                                <p>Hours</p>
                                <p>Minutes</p>
                                <p>Seconds</p>
                            </div>
                            <p>Get ready! Something really cool is coming!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="recently-added">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-12">
                    <h2 class="section-title">Anime</h2>
                    <h3 class="section-sub-title rec">recently added series</h3>
                </div>
            </div>
            <div class="recently-anime">
                <div class="col-12">
                    <div class="anime-items">
                        <div class="row">
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="block2 hd">
                                    <div class="block2-preview">
                                        <a href="#"><img class="item-preview" src="/resources/preview/1.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="block2-desc">
                                        <div class="desc-child">
                                            <a href="#" class="title">CHAINSAW
                                                MAN</a>
                                            <div class="stars">
                                                *********
                                            </div>
                                            <span class="text-uppercase">Total episode 12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="block2 hd">
                                    <div class="block2-preview">
                                        <a href="#"><img class="item-preview" src="/resources/preview/2.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="block2-desc">
                                        <div class="desc-child">
                                            <a href="#" class="title">ONE PIECE: ADVENTURE OF NEBULANDIA</a>
                                            <div class="stars">
                                                *********
                                            </div>
                                            <span class="text-uppercase">Total episode 12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="block2 hd">
                                    <div class="block2-preview">
                                        <a href="#"><img class="item-preview" src="/resources/preview/3.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="block2-desc">
                                        <div class="desc-child">
                                            <a href="#" class="title">TOKYO
                                                REVENGERS</a>
                                            <div class="stars">
                                                *********
                                            </div>
                                            <span class="text-uppercase">Total episode 12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="block2 hd">
                                    <div class="block2-preview">
                                        <a href="#"><img class="item-preview" src="/resources/preview/4.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="block2-desc">
                                        <div class="desc-child">
                                            <a href="#" class="title">MAIRIMASHITA! IRUMA-KUN 3RD SEASON</a>
                                            <div class="stars">
                                                *********
                                            </div>
                                            <span class="text-uppercase">Total episode 12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Discord Link -->
    <section class="subscribe mt-5 mb-5">
        <div class="discord">
            <a href="#"><img class="w-100 img-fluid" src="{{ Vite::asset('resources/img/discord/discord.png') }}" alt=""></a>
        </div>
    </section>

    <!-- Section News -->
    <section id="news" class="news">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2 class="section-title">Daily News</h2>
                    <h3 class="section-sub-title">Recent Blog</h3>
                </div>
            </div>
            <!--/ Title row end -->

            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news1.jpg') }}" alt="img">
                                <div class="topic">Top</div>
                                <div class="date">June 17, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">Top 58 Best Anime Waifus Of
                                    All Time
                                    [Cute Waifus
                                    List]</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 1st post col end -->

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news2.jpg') }}" alt="img">
                                <div class="topic">List
                                </div>
                                <div class="date">June 17, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">22 Best Demon Girls In
                                    Anime: Our
                                    Favorite
                                    Characters List</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 2nd post col end -->

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news3.jpg') }}" alt="img">
                                <div class="topic">Ranking
                                </div>
                                <div class="date">Aug 13, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">Top 28 Best Beautiful Anime
                                    Fox Girl
                                    List</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 3rd post col end -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news4.jpg') }}" alt="img">
                                <div class="topic">Top
                                </div>
                                <div class="date">June 17, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">Top 58 Best Anime Waifus Of
                                    All Time
                                    [Cute Waifus
                                    List]</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 1st post col end -->

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news5.jpg') }}" alt="img">
                                <div class="topic">Anime
                                </div>
                                <div class="date">June 17, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">Top 100 Best anime Waifus
                                    Of All Time
                                    [Best Waifus
                                    List] </a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 2nd post col end -->

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="latest-post">
                        <div class="latest-post-media">
                            <a href="news-single.html" class="latest-post-img">
                                <img loading="lazy" class="img-fluid" src="{{ Vite::asset('resources/img/news/news6.jpg') }}" alt="img">
                                <div class="topic">Ranking
                                </div>
                                <div class="date">Aug 13, 2023
                                </div>
                            </a>
                        </div>
                        <div class="post-body">
                            <h4 class="post-title">
                                <a href="news-single.html" class="d-block post_link">Top 10 cutest anime
                                    characters with
                                    green hair!</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illo ab
                                amet officiis,
                                at culpa
                                cum animi reprehenderit commodi natus....</p>
                        </div>
                    </div><!-- Latest post end -->
                </div><!-- 3rd post col end -->
            </div>
            <!--/ Content row end -->

            <div class="general-btn text-center mt-4">
                <a class="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
            </div>

        </div>
        <!--/ Container end -->
    </section>
@endsection
