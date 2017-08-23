<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function like_plug()
    {
        return $this->belongsToMany(Plug::class , 'like_plugs')->withTimestamps();
    }

    public function collect_plug()
    {
        return $this->belongsToMany(Plug::class , 'collect_plugs')->withTimestamps();
    }

    public function plugs()
    {
        return $this->hasMany(Plug::class);
    }

    public function getBirthplaceAttribute($birthplace)
    {
        if(!is_string($birthplace)){
            return $this->birthplace = json_decode($birthplace,true);
        }else{
            return $this->birthplace = '';
        }
    }

    public function getHabitablyAttribute($habitably)
    {
        if(!is_string($habitably)){
            return $this->habitably = json_decode($habitably,true);
        }else{
            return $this->habitably = '';
        }
    }

}
