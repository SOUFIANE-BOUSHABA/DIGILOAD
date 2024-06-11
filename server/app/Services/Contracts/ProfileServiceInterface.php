<?php 

namespace App\Services\Contracts;

interface ProfileServiceInterface
{

    public function create(array $data);
    public function update(array $data , $id);

    public function destroy($id);

    public function getOne($id);

    public function getAll();
}