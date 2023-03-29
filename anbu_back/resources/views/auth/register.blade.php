@extends('layouts.main')

@section('content')
    <section class="login spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="login__form">
                        <h3>Register</h3>
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="input__item">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                                    name="name" placeholder="Name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                <span class="icon_lock"></span>
                            </div>
                            <div class="input__item">
                                <input id="email" type="email"
                                    class="form-control @error('email') is-invalid @enderror" placeholder="E-mail" name="email"
                                    value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                <span class="icon_lock"></span>
                            </div>

                            <div class="input__item">
                                <input id="password" type="password"
                                    class="form-control @error('password') is-invalid @enderror" placeholder="Password" name="password" required
                                    autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                <span class="icon_lock"></span>
                            </div>

                            <div class="input__item">
                                <input id="password-confirm" type="password" class="form-control" placeholder="Confirm password"
                                    name="password_confirmation" required autocomplete="new-password">
                                    <span class="icon_lock"></span>
                            </div>


                            <button type="submit" class="site-btn">Register</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="login__register">
                        <h3>Have An Account?</h3>
                        <a href="{{ route('login') }}" class="primary-btn">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
