<?php

namespace App\Repositories\Implementations;

use App\Models\Mail;
use App\Repositories\Contracts\MailRepositoryInterface;

class MailRepository implements MailRepositoryInterface
{
    protected $model;

    public function __construct(Mail $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }
}
