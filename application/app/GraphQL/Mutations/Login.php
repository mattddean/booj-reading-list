<?php

namespace App\GraphQL\Mutations;

use App\User;
use Illuminate\Support\Facades\Auth;
use Exception;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $credentials
     */
    public function __invoke($_, array $credentials): User
    {
        $guard = Auth::guard();

        if( ! $guard::attempt($credentials)) {
            throw new Exception('Invalid credentials.');
        }

        /**
         * Since we successfully logged in, this can no longer be `null`.
         *
         * @var \App\User $user
         */
        $user = $guard->user();

        return $user;
    }
}
