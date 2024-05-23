<?php
namespace App\Http\Requests;

use App\DTOs\RegisterDTO;
use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'username' => 'required|string|unique:users',
            'password' => 'required|string|min:6',
            'privilege' => 'required|string',
        ];
    }

    public function toDTO()
    {
        return new RegisterDTO(
            $this->input('username'),
            $this->input('password'),
            $this->input('privilege')
        );
    }
}
