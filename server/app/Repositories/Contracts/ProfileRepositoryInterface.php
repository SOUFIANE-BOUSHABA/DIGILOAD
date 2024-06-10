<?php

namespace App\Repositories\Contracts;

use App\Models\Profile;
interface ProfileRepositoryInterface
{
  public function create(array $data): Profile;
}
