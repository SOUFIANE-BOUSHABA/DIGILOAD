<?php

namespace App\Services\Contracts;

use App\Models\Mail;

interface MailServiceInterface
{
    public function createMail(array $data);
}
