<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function author()
    {
        return $this->belongsTo('App\Author');
    }

    public function genre()
    {
        return $this->belongsTo('App\Genre');
    }
}
