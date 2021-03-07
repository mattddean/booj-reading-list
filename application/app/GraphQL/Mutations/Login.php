<?php

namespace App\GraphQL\Mutations;

use App\User;
use Illuminate\Support\Facades\Auth;
use Exception;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args): User
    {
        $guard = Auth::guard();

        if( ! $guard->attempt($args)) {
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
