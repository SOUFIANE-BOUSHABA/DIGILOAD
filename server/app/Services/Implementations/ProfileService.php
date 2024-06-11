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

    public function update(array $data, $id)
    {
        $profile = Profile::findOrFail($id);
        return $this->profileRepository->update($profile, $data);
    }

    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();
        return response()->json(['message' => 'Profile deleted successfully'], Response::HTTP_OK);
    }

    public function getOne($id)
    {
        return Profile::findOrFail($id);
    }

    public function getAll(){
        return Profile::all();
    }

}