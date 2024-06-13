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


    public function update(ProfileRequest $request, $id)
    {
        $profile = $this->profileService->update($request->all(), $id);
        return response()->json($profile, 200);
    }

    public function destroy($id)
    {
        $this->profileService->destroy($id);
        return response()->json([
            "message"=> "done",
        ] , 200);
    }

    // get one profile
    public function getOne($id)
    {
        $profile = $this->profileService->getOne($id);
        if (!$profile) {
            return response()->json([
                "message" => "Profile not found"
            ], 404);
        }
        return response()->json($profile, 200);
    }

    public function getAll()
    {
        $profile = $this->profileService->getAll();
        return response()->json($profile, 200);
    }

    // get all countries from profile
    public function getAllCountrie(){
        $profile = $this->profileService->getAllCountrie();
        return response()->json($profile, 200);

    }
}