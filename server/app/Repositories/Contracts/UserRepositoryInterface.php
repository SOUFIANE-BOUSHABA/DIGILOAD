<?php

namespace App\Repositories\Contracts;

use App\Models\User;
interface UserRepositoryInterface
{
    public function findByUsername(string $username);
    public function create(array $data): User;
}
