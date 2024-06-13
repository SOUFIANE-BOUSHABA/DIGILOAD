<?php

namespace App\Repositories\Contracts;

use App\Models\Mail;

interface MailRepositoryInterface
{
    public function create(array $data);
}
