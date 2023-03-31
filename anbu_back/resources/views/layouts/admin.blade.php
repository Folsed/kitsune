<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="#">
    <link rel="icon" type="image/png" href="../assets/img/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Admin</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        name='viewport' />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--     Fonts and icons     -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
    <!-- CSS Files -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    @vite(['resources/admin/css/appAdmin.css', 'resources/admin/js/appAdmin.js'])
</head>

<body>
    <div class="wrapper">

        <div class="sidebar">
            <h3>AdminPanel</h3>
            <nav class="nav">
                <a href="#1"class="nav-item">
                    <div class="item-wrap">
                        Forms:
                    </div>
                </a>
                <a href="{{ route('admin-forms-anime') }}"
                    class="nav-item @if (Route::is('admin-forms-anime')) {{ 'active' }} @endif">
                    <div class="item-wrap">
                        Anime
                    </div>
                </a>
                <a href="#3" class="nav-item">
                    <div class="item-wrap">
                        News
                    </div>
                </a>
                <a href="#4" class="nav-item">
                    <div class="item-wrap">
                        Tables:
                    </div>
                </a>
                <a href="{{ route('admin-tables-anime') }}"
                    class="nav-item @if (Route::is('admin-tables-anime')) {{ 'active' }} @endif"">
                    <div class="item-wrap">
                        Anime
                    </div>
                </a>
            </nav>
        </div>

        <div class="main-panel">
            @yield('adminContent')
        </div>
    </div>

</body>
<!--   Core JS Files   -->
<script src="{{ asset('js/jquery.js') }}"></script>


</html>
