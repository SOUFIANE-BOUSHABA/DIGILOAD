<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'tel',
        'birthDay',
        'sexe',
        'Qualite',
        'Pays',
        'Intitule',
        'Ville',
        'Secteur',
        'Langue',
        'Formation',
        'organisme',
        'LinkedIn',
        'twitter',
        'FaceBook',
        'Instagram',
        'Inscription_date145',
    ];
}
