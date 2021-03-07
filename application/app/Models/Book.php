<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function author()
    {
        return $this->belongsTo('App\Models\Author');
    }

    public function genre()
    {
        return $this->belongsTo('App\Models\Genre');
    }
}
