<?php

namespace App\Services\Implementations;

use App\Models\Profile;
use App\Repositories\Contracts\ProfileRepositoryInterface;
use App\Services\Contracts\ProfileServiceInterface;
use Symfony\Component\HttpFoundation\Response;

class ProfileService implements ProfileServiceInterface
{
    protected $profileRepository;

    public function __construct(ProfileRepositoryInterface $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }

    public function create(array $data)
    {
        $profile = $this->profileRepository->create($data);
        return $profile;
    }

 

    public function getAll(){
        return Profile::all();
    }

}
