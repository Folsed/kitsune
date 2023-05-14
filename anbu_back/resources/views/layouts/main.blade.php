<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=2.0">

    <!-- Imports -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- Csrf Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Css Styles -->
    @vite('resources/css/app.css')
    <script src="https://kit.fontawesome.com/0f1a2fa745.js" crossorigin="anonymous"></script>


    <title>Home</title>
</head>

<body>



    <!-- Scripts -->
    @vite('resources/js/app.js')

</body>

</html>
