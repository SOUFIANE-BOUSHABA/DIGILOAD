<?php 

namespace App\Services\Contracts;

interface ProfileServiceInterface
{

    public function create(array $data);

    public function getAll();
}
