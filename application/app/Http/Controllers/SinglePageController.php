<?php

// https://blog.pusher.com/web-application-laravel-vue-part-4/

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    public function index()
    {
        return view("landing");
    }
}
