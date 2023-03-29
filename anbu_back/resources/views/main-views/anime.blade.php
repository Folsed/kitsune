@extends('layouts.main')

@section('title')
    {{ $data->title }}
@endsection


@section('content')
    <div class="container">
        <div class="col-lg-12">
            <div class="sub-preview">
                <div class="sub-preview-child">
                    @foreach ($data->previews as $preview)
                        <div class="sub-preview-bg_img" style="background-image: url('{{ asset($preview->preview_path) }}');">
                    @endforeach
                </div>
                <div class="head-title text-center">
                    <h1 class="head-main-title">{{ $data->title }}</h1>
                    <span class="head-sub-title">{{ $data->title }}</span> {{-- Change on Original title --}}
                </div>
            </div>
        </div>
    </div>
    <div class="mar1">
        <div class="row">
            <div class="col-lg-5 mt-5">
                <div class="anime-info">
                    <noindex>
                        <div class="product__info mt-2">
                            <div class="product__item__text">
                                <strong>Original title:</strong>
                                <ul>
                                    <li>{{ $data->title }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Year:</strong>
                                <ul>
                                    <li><a href="#">{{ $data->release_year }}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Genre:</strong>
                                <ul>
                                    @foreach ($data->categories as $category)
                                        <a href="#">
                                            <li><a href="#">{{ $category->name }}</a></li>
                                        </a>
                                    @endforeach

                                </ul>
                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Director:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">{{ $data->director }}</a></li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Studio:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">Encourage Films</a></li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Duration:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">{{ $data->duration }}</a></li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Series:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">12/12</a></li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Tranlation:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">Folsedy</a></li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div class="product__info">
                            <div class="product__item__text">
                                <strong>Plug:</strong>
                                <ul>
                                    <a href="#">
                                        <li><a href="#">Plug</a></li>
                                    </a>
                                </ul>

                            </div>
                        </div>

                    </noindex>
                </div>
            </div>


            <div class="col-lg-7 mt-5 test">
                <div class="anime-page-slider">
                    <div class="screenshots-slider">
                        @foreach ($data->screenshots as $screenshot)
                            <div class="slide">
                                <img src="{{ asset($screenshot->screenshot_path) }}" alt="">
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-5">
                <div class="anime-description">
                    <h2 class="section-title">description</h2>
                    <div class="mt-2">
                        {{ $data->synopsis }}
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-5">
                <div class="video-content-box">
                    <h2 class="section-title">Trailer</h2>
                    <div class="video-inner mt-2">
                        <iframe width="100%" height="450"
                            src="https://www.youtube.com/embed/{{ $data->videoYoutubeId }}" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                    </div>

                </div>
            </div>




            {{-- Logo --}}

            <svg viewBox="0 0 1024 768" height="768px" width="1024px" version="1.1">
                <defs id="defs338045"></defs>
                <linearGradient spreadMethod="pad" y2="30%" x2="-10%" y1="120%" x1="30%"
                    id="3d_gradient2-logo-8df62bc5-1dd8-4fcf-8c59-41cbcfe9e990">
                    <stop id="stop338022" stop-opacity="1" stop-color="#ffffff" offset="0%"></stop>
                    <stop id="stop338024" stop-opacity="1" stop-color="#000000" offset="100%"></stop>
                </linearGradient>
                <linearGradient gradientTransform="rotate(-30)" spreadMethod="pad" y2="30%" x2="-10%"
                    y1="120%" x1="30%" id="3d_gradient3-logo-8df62bc5-1dd8-4fcf-8c59-41cbcfe9e990">
                    <stop id="stop338027" stop-opacity="1" stop-color="#ffffff" offset="0%"></stop>
                    <stop id="stop338029" stop-opacity="1" stop-color="#cccccc" offset="50%"></stop>
                    <stop id="stop338031" stop-opacity="1" stop-color="#000000" offset="100%"></stop>
                </linearGradient>
                <g id="logo-group">
                    <image xlink:href="" id="container" x="272" y="144" width="480" height="480"
                        transform="translate(0 0)" style="display: none;"></image>
                    <g id="logo-center" transform="translate(163.4715624999999 0)">
                        <image xlink:href="" id="icon_container" x="0" y="0" style="display: none;">
                        </image>
                        <g id="slogan"
                            style="font-style:oblique;font-weight:normal;font-size:32px;line-height:1;font-family:'Libre Baskerville';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                            transform="translate(0 0)"></g>
                        <g id="title"
                            style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:'LIBRARY 3 AM';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                            transform="translate(0 0)">
                            <path id="path338050"
                                style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:'LIBRARY 3 AM';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                                d="m 435.4415,-53.928 h -10.584 l -12.132,33.372 h 27.072 l -9.648,-26.532 -7.056,19.404 h 3.204 l 3.852,-10.548 5.328,14.652 h -18.432 l 9.936,-27.324 h 6.336 l 17.424,47.88 h -4.608 l -4.86,-13.428 h -30.06 L 405.2375,0 h 11.016 l 3.384,-9.324 h -3.204 l -2.304,6.3 h -4.572 l 3.78,-10.404 h 25.812 L 444.0095,0 h 11.052 z"
                                stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#f2c106"
                                stroke="#f2c106"
                                transform="translate(0 346.537) translate(184.25 -30.891999999999996) scale(2.5) translate(-405.2375 53.928)">
                            </path>
                            <path id="path338052"
                                style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:'LIBRARY 3 AM';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                                d="m 496.475,-18.648 -20.772,-35.28 h -3.528 l 27.324,46.404 v -43.38 h 4.536 v 47.88 h -6.948 l -30.024,-50.904 h -2.988 V 0 h 10.584 v -26.352 l -3.024,-5.148 v 28.476 h -4.536 V -47.916 L 495.359,0 h 11.7 v -53.928 h -10.584 z"
                                stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#eecd4c"
                                stroke="#eecd4c"
                                transform="translate(0 346.537) translate(331.3437499999999 -30.891999999999996) scale(2.5) translate(-464.075 53.928)">
                            </path>
                            <path id="path338054"
                                style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:'LIBRARY 3 AM';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                                d="m 547.262,-32.688 c 0.504,-0.36 0.792,-0.648 1.224,-1.188 1.008,-1.404 1.584,-3.204 1.584,-5.292 0,-3.528 -2.592,-7.632 -9.9,-7.632 h -11.16 v 23.544 h 12.852 c 5.4,0 7.884,3.168 7.884,6.696 0,3.456 -2.016,6.408 -7.056,6.408 h -10.656 v -9 h -3.024 v 12.024 h 13.68 c 6.948,0 10.08,-4.536 10.08,-9.432 0,-5.544 -4.176,-9.72 -10.908,-9.72 h -9.828 v -17.496 h 8.136 c 3.996,0 6.876,1.512 6.876,4.608 0,3.924 -2.7,5.76 -6.372,5.76 h -4.104 v 3.024 h 4.248 c 9.072,0 16.488,4.176 16.488,14.256 0,6.984 -5.148,13.104 -14.724,13.104 h -18.108 v -47.88 h 16.02 c 8.64,0 13.968,5.256 13.968,11.088 0,2.088 -0.252,3.816 -0.792,5.112 l 2.556,1.656 c 0.828,-1.692 1.26,-3.888 1.26,-6.768 0,-7.236 -6.408,-14.112 -16.992,-14.112 H 521.45 V 0 h 21.132 c 10.98,0 17.748,-7.2 17.748,-16.128 0,-8.928 -5.004,-14.544 -13.068,-16.56 z"
                                stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ebd993"
                                stroke="#ebd993"
                                transform="translate(0 346.537) translate(474.7812500000001 -30.891999999999996) scale(2.5) translate(-521.45 53.928)">
                            </path>
                            <path id="path338056"
                                style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:'LIBRARY 3 AM';font-variant-ligatures:none;text-align:center;text-anchor:middle"
                                d="m 602.77625,-53.928 v 33.012 c 0,4.788 -1.26,8.064 -3.852,9.9 v 3.456 c 3.6,-1.62 6.876,-5.328 6.876,-13.356 v -29.988 h 4.536 v 29.988 c 0,6.588 -2.124,17.82 -15.948,18.612 v -7.164 c -0.504,0.036 -0.972,0.072 -1.512,0.072 -6.732,0 -9.936,-3.888 -9.936,-11.52 v -33.012 h -10.584 v 33.012 c 0,10.476 4.644,18.576 14.472,21.024 v -3.132 c -9.468,-2.808 -11.448,-11.376 -11.448,-17.892 v -29.988 h 4.536 v 29.988 c 0,11.412 6.696,14.184 11.448,14.472 V 0.72 c 0.504,0.036 1.008,0.036 1.512,0.036 14.004,0 20.484,-9.288 20.484,-21.672 v -33.012 z"
                                stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#e7e5d9"
                                stroke="#e7e5d9"
                                transform="translate(0 346.537) translate(602.0468750000002 -30.891999999999996) scale(2.5) translate(-572.35625 53.928)">
                            </path>
                        </g>
                        <image
                            xlink:href="{{ Vite::asset('/resources/img/logo/anbu.png') }}"
                            id="icon" x="-7" y="309" width="150" height="150"></image>
                    </g>
                </g>
            </svg>


            {{-- Logo---------------------------------------------------------------- --}}


            <div class="col-lg-12 mt5">
                <div class="commet-box">
                    <div class="comment_area mb-50 clearfix">
                        <div class="web-contact-form">
                            <h2 class="mb-4">Leave A Comment</h2>

                            <!-- Form -->
                            <form action="{{ route('anime-comment', ['id' => $data->id, 'alias' => $data->alias]) }}"
                                method="post">
                                @csrf
                                @hasrole('muted')
                                    <div class="col-lg-12">
                                        <div class="attention-message-box">
                                            <div class="message-box d-flex">
                                                <div>
                                                    <img src="{{ Vite::asset('/resources/img/warnings/attention.png') }}"
                                                        alt="">
                                                </div>
                                                <div class="at-message">
                                                    <strong>Attention</strong>
                                                    <span class="text-danger">You are muted!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @elseif (auth()->check())
                                    <div class="row">
                                        <div class="col-12">
                                            <textarea name="comment" class="form-control mb-15" placeholder="What are you thinking?" style="height: 126px;"></textarea>
                                        </div>
                                        <div class="col-12 text-end">
                                            <button type="submit" class="btn web-btn">Post Comment</button>
                                        </div>
                                    </div>
                                @elseif (auth()->guest())
                                    <div class="col-lg-12">
                                        <div class="attention-message-box">
                                            <div class="message-box d-flex">
                                                <div>
                                                    <img src="{{ Vite::asset('/resources/img/warnings/attention.png') }}"
                                                        alt="">
                                                </div>
                                                <div class="at-message">
                                                    <strong>Attention</strong>
                                                    <span>Visitors who are in the Guest group cannot leave comments on this
                                                        post.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endhasrole
                            </form>
                        </div>

                        <h5 class="title">Comments</h5>
                        <ol>
                            <!-- Single Comment Area -->
                            <li class="single_comment_area">
                                <!-- Comment Content -->
                                @foreach ($data->comments as $comment)
                                    <div class="comment-content d-flex">
                                        <!-- Comment Author -->
                                        <div class="comment-author">
                                            <img class="w-100 img-fluid" src="resources/feedback/1.jpg" alt="author">
                                        </div>
                                        <!-- Comment Meta -->
                                        <div class="comment-meta">
                                            <a href="#!"
                                                class="post-date">{{ $comment->created_at->diffForHumans() }}</a>
                                            <h5>{{ $comment->user->name }}</h5>
                                            <p>{{ $comment->comment }}</p>
                                            <a href="#!" class="like">Like</a>
                                            <a href="#!" class="reply">Reply</a>
                                        </div>
                                    </div>
                                @endforeach

                                {{-- <ol class="children">
                                    <li class="single_comment_area">
                                        <!-- Comment Content -->
                                        <div class="comment-content d-flex">
                                            <!-- Comment Author -->
                                            <div class="comment-author">
                                                <img class="w-100 img-fluid" src="resources/feedback/1.jpg"
                                                    alt="author">
                                            </div>
                                            <!-- Comment Meta -->
                                            <div class="comment-meta">
                                                <a href="#!" class="post-date">27 Aug 2024</a>
                                                <h5>Nino Nakano</h5>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor
                                                    sit amet, consectetu adipisci
                                                    velit, sed quia non numquam eius modi</p>
                                                <a href="#!" class="like">Like</a>
                                                <a href="#!" class="reply">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol> --}}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
