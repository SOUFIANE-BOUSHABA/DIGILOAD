<?php

namespace App\Repositories\Implementations;

use App\Models\Profile;
use App\Models\User;
use App\Repositories\Contracts\ProfileRepositoryInterface;

class ProfileRepository implements ProfileRepositoryInterface
{
  public function create(array $data) : Profile{
    return Profile::create($data);
   }

   public function update(Profile $profile, array $data) : Profile{
    $profile->update($data);
    return $profile;
   }
}