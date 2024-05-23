<?php

namespace App\Http\Requests;
use App\DTOs\LoginDTO;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            'username' => 'required|string',
            'password' => 'required|string',
        ];
    }

    public function toDTO()
    {
        return new LoginDTO(
            $this->input('username'),
            $this->input('password')
        );
    }
}
