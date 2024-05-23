<?php

namespace App\DTOs;

class RegisterDTO
{
    public $username;
    public $password;
    public $privilege;

    public function __construct($username, $password, $privilege)
    {
        $this->username = $username;
        $this->password = $password;
        $this->privilege = $privilege;
    }
}