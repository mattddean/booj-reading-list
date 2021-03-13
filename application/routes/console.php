<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

# https://dev.to/joselfonseca/graphql-auth-with-passport-and-lighthouse-php-14g5
Artisan::command('create_sample_user', function () {
    \App\Models\User::create([
        'name' => 'Some Developer',
        'email' => 'myemail@email.com',
        'password' => bcrypt('kasdf83u4bit3ui')
    ]);
})->describe('Create sample user');

Artisan::command('create_sample_book', function () {
    \App\Models\Book::create([
        'name' => 'Harry Potter and the Philosopher\'s Stone',
        'email' => 'myemail@email.com',
        'password' => bcrypt('kasdf83u4bit3ui')
    ]);
})->describe('Create sample user');