<div class="auth-container">
    <div class="box">
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="form signin">
                <h2>Sign In</h2>
                <div class="inputBox">
                    <input id="email" type="email" class="@error('email') is-invalid @enderror" required="required"
                        name="email" value="{{ old('email') }}">
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input id="password" type="password" class="@error('password') is-invalid @enderror"
                        name="password" required="required">
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href="#">Forgot Password</a>
                    <a class="signupBtn">Sign Up</a>
                </div>
                <button class="auth-btn" type="submit">Login</button>
            </div>
        </form>

        <form method="POST" action="{{ route('register') }}">
            @csrf
            <div class="form signup">
                <h2>Registration</h2>
                <div class="inputBox">
                    <input type="text" required="required">
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="text" required="required">
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required">
                    <span>Repeat Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <div><strong>Already have an Account? </strong><a class="signinBtn">Sign
                            In</a>
                    </div>
                </div>
                <button class="auth-btn" type="submit">Register</button>
            </div>
        </form>
    </div>
</div>
