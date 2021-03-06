<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //
    protected $guarded = [];

    public function tags()
    {
        return $this->hasMany(self::class , 'pid' , 'id');
    }

    public function children()
    {
        return $this->hasMany(self::class , 'pid' , 'id');
    }

    public function parent()
    {
        return $this->belongsTo(self::class , 'pid' , 'id');
    }
}
