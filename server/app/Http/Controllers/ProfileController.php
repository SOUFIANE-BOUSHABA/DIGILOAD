<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Services\Contracts\ProfileServiceInterface;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //

    protected $profileService;
    public function __construct(ProfileServiceInterface $profileService)
    {
        $this->profileService = $profileService;
    }

    public function create(ProfileRequest $request)
    {
        $profile = $this->profileService->create($request->all());
        return response()->json($profile, 201);
    }




    public function getAll()
    {
        $profile = $this->profileService->getAll();
        return response()->json($profile, 200);
    }
}
