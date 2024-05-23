<?php

namespace App\Services\Implementations;
use App\DTOs\LoginDTO;
use App\DTOs\RegisterDTO;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Contracts\UserServiceInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserService implements UserServiceInterface
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(LoginDTO $loginDTO)
    {
        if (Auth::attempt(['username' => $loginDTO->username, 'password' => $loginDTO->password])) {
            return Auth::user()->createToken('authToken')->plainTextToken;
        }

        return null;
    }


    public function register(RegisterDTO $registerDTO)
    {  
        $registerDTO->password = Hash::make($registerDTO->password);
        $user = $this->userRepository->create([
            'username' => $registerDTO->username,
            'password' => $registerDTO->password,
            'privilege' => $registerDTO->privilege,
        ]);

        return $user;
    }




    public function getUser()
    {
        $user = Auth::user();

        if ($user) {
            return response()->json([
                'user' => $user,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => 'User not found'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
