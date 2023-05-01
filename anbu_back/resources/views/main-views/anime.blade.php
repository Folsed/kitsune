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
                        <div class="sub-preview-bg_img"
                            style="background-image: url('{{ asset($preview->sub_preview_path) }}');">
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
                                    @foreach ($data->genres as $genre)
                                        <a href="#">
                                            <li><a href="#">{{ $genre->name }}</a></li>
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

            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg138181" viewBox="0 0 1024 768" height="768px" width="1024px" version="1.1">
                <metadata id="metadata138187">
                  <rdf:rdf>
                    <cc:work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
                    </cc:work>
                  </rdf:rdf>
                </metadata>
                <defs id="defs138185"></defs>
                <linearGradient spreadMethod="pad" y2="30%" x2="-10%" y1="120%" x1="30%" id="3d_gradient2-logo-d25a024e-6d00-4dcb-b111-2a3727451178">
                  <stop id="stop138162" stop-opacity="1" stop-color="#ffffff" offset="0%"></stop>
                  <stop id="stop138164" stop-opacity="1" stop-color="#000000" offset="100%"></stop>
                </linearGradient>
                <linearGradient gradientTransform="rotate(-30)" spreadMethod="pad" y2="30%" x2="-10%" y1="120%" x1="30%" id="3d_gradient3-logo-d25a024e-6d00-4dcb-b111-2a3727451178">
                  <stop id="stop138167" stop-opacity="1" stop-color="#ffffff" offset="0%"></stop>
                  <stop id="stop138169" stop-opacity="1" stop-color="#cccccc" offset="50%"></stop>
                  <stop id="stop138171" stop-opacity="1" stop-color="#000000" offset="100%"></stop>
                </linearGradient>
                <g id="logo-group">
                  <image xlink:href="" id="container" x="272" y="144" width="480" height="480" transform="translate(0 0)" style="display: none;"></image>
                  <g id="logo-center" transform="translate(57.35375000000005 0)">
                    <image xlink:href="" id="icon_container" x="-8" y="-7" style="display: none;"></image>
                    <g id="slogan" style="font-style:normal;font-weight:400;font-size:32px;line-height:1;font-family:'Source Sans Pro';font-variant-ligatures:none;text-align:center;text-anchor:middle" transform="translate(0 0)"></g>
                    <g id="title" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" transform="translate(0 0)">
                      <path id="path138190" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 427.75437,-35.28 -15.984,14.904 v 0.72 h 9.144 q 2.08801,0 3.528,1.512 1.51201,1.44 1.51201,3.528 V 0 h -5.76001 v -15.12 h -18.72 V 0 h -5.75999 v -35.28 h 5.75999 v 19.224 l 19.152,-19.224 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(332.5086634 34.901599999999995) scale(1.43) translate(-395.71438 35.28)"></path>
                      <path id="path138192" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 443.24,0 h -5.76 v -35.28 h 5.76 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(387.8005 34.901599999999995) scale(1.43) translate(-437.48 35.28)"></path>
                      <path id="path138194" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 476.70312,-30.24 h -10.44 V 0 h -5.76 v -30.24 h -10.43999 v -5.04 h 26.63999 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(401.3613759 34.901599999999995) scale(1.43) translate(-450.06313 35.28)"></path>
                      <path id="path138196" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 507.365,-5.04 q 0,2.088 -1.512,3.6 Q 504.413,0 502.325,0 h -20.16 v -5.04 h 19.44 v -10.08 h -14.4 q -2.088,0 -3.6,-1.44 -1.44,-1.512 -1.44,-3.6 v -10.08 q 0,-2.088 1.44,-3.528 1.512,-1.512 3.6,-1.512 h 20.16 v 5.04 h -19.44 v 10.08 h 14.4 q 2.088,0 3.528,1.512 1.512,1.44 1.512,3.528 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(442.83405 34.901599999999995) scale(1.43) translate(-482.165 35.28)"></path>
                      <path id="path138198" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 549.14188,0 h -5.76 V -4.32 L 539.06187,0 h -15.12 q -2.08799,0 -3.6,-1.44 -1.43999,-1.512 -1.43999,-3.6 v -30.24 h 5.75999 v 30.24 h 18.72001 v -30.24 h 5.76 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(490.9347884 34.901599999999995) scale(1.43) translate(-518.90188 35.28)"></path>
                      <path id="path138200" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 592.31375,-0.072 h -10.08 l -13.68,-29.88 h -2.88 l 2.16,3.6 v 26.28 h -5.76 v -35.28 h 10.152 l 13.608,29.88 h 2.88 l -2.16,-3.6 v -26.28 h 5.76 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(548.2375625 34.798640000000006) scale(1.43) translate(-562.07375 35.352)"></path>
                      <path id="path138202" style="font-style:normal;font-weight:400;font-size:72px;line-height:1;font-family:Iceland;font-variant-ligatures:none;text-align:center;text-anchor:middle" d="m 630.44562,0 h -25.19999 v -25.2 l 5.03999,-5.04 h -5.03999 v -5.04 h 25.19999 v 5.04 h -19.44 v 14.4 l 4.32,-4.32 h 15.12 v 5.04 h -19.44 v 10.08 h 19.44 z" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#ff7e00" stroke="#ff7e00" transform="translate(0 323.92467999999997) translate(605.5403508999999 34.901599999999995) scale(1.43) translate(-605.24563 35.28)"></path>
                    </g>
                    <image xlink:href="data:image/png;base64,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" id="icon" x="259" y="337" width="79.5" height="79.5"></image>
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
