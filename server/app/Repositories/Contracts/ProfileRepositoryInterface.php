<?php

namespace App\Repositories\Contracts;

use App\Models\Profile;
interface ProfileRepositoryInterface
{
  public function create(array $data): Profile;
  public function update(Profile $profile, array $data): Profile;
}