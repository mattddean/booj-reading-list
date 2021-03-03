<!DOCTYPE html>
<!-- https://blog.pusher.com/web-application-laravel-vue-part-4/ -->

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Serverless Reading List</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
    <link href="{{ asset('dist/js/app.js') }}" rel="preload" as="script">
    <link href="{{ asset('dist/js/chunk-vendors.js') }}" rel="preload" as="script"></head>
    <!-- <link href=" {{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>

<body>
    <div id="app">
        <!-- <app></app> -->
    </div>
    <script type="text/javascript" src="{{ asset('dist/js/chunk-vendors.js') }}"></script>
    <script type="text/javascript" src="{{ asset('dist/js/app.js') }}"></script>
</body>

</html>