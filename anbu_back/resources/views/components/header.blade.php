{{-- <header class="header">
    <div class="container">
        <div class="site-navigation">
            <div class="col-lg-12 h-100">
                <div class="nav align-items-center menu-box h-100">
                    <div class="logo-box">
                        <a href="{{ route('home') }}">Folsed's<span>World</span></a>
                    </div>
                    <ul class="nav navigation">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#">Animes</a></li>
                        <li class="nav-item"><a href="#">Genre</a></li>
                        <li class="nav-item"><a href="#">News</a></li>
                        <li class="nav-item"><a href="#">Contacts</a></li>
                    </ul>
                    @if (auth()->guest())
                        <div class="nav auth-box">
                            <li class="nav-item login">Log In</li>
                        </div>
                    @elseif (auth()->check())
                        <li>
                            <a
                                class="nav-item login u-checked align-items-center h-100">{{ $userDataProvider->name }}</a>
                            <div class="dropdown h-100">
                                <div class="dropdown-content">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                    <a href="#">JavaScript</a>
                                    <a href="#">Python</a>
                                </div>
                            </div>
                        </li>
                        <div class="auth-box">
                            <a class="nav-item login u-checked align-items-center h-100">{{ $userDataProvider->name }}</a>
                            <div class="dropdown h-100">
                                <div class="dropdown-content">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                    <a href="#">JavaScript</a>
                                    <a href="#">Python</a>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</header> --}}

<header class="header">
    <div class="container header-container">
        <div class="logo">
            <a href="{{ route('home') }}">Folsed's<span>World</span></a>
        </div>
        <nav class="nav-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Animes</a></li>
                <li><a href="#">Genre</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
        <div class="action-box">
            @if(auth()->guest())
            <button class="log-btn auth"><a>Log In</a></button>
            @elseif (auth()->check())
            <button class="log-btn"><a href="#">{{ $userDataProvider->name }}</a></button>
            <div class="dropdown-content">
                <a href="#">Account</a>
                <a href="#">Admin Panel</a>
                <a href="{{ route('logout') }}">Log Out</a>
            </div>
            @endif
        </div>
    </div>
</header>
