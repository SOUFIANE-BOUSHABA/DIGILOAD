<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Services\Implementations\UserService;

class AuthController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }





    public function login(LoginRequest  $request)
    {
        $loginDTO = $request->toDTO();
        $token = $this->userService->login($loginDTO);

        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['token' => $token], 200);
    }





    public function register(RegistrationRequest $request)
    {
        $registerDTO = $request->toDTO();
        $user = $this->userService->register($registerDTO);

        return response()->json($user, 201);
    }




    public function getUser()
    {
        return $this->userService->getUser();
    }




    public function logout()
    {
        return $this->userService->logout();
    }
}
