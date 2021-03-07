<?php

use App\User;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

function resolveUserAttribute(User $user, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
{
    return $user->{$resolveInfo->fieldName};
}