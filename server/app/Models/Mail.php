<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'mailHeader',
        'Emailbody',
        'Emailfooter',
        'attachedFile',
        'recipientEmail'
    ];
}
