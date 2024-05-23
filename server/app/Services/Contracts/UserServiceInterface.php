<?php 

namespace App\Services\Contracts;

use App\DTOs\LoginDTO;
use App\DTOs\RegisterDTO;

interface UserServiceInterface
{
    public function login(LoginDTO $data);
    public function register(RegisterDTO $data);
}
