<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'firstName' => 'required|string|max:150',
            'lastName' => 'required|string|max:250',
            'email' => 'required|string',
            'tel' => 'required|string',
            'birthDay' => 'nullable|date',
            'sexe' => 'nullable|string|max:120',
            'Qualite' => 'required|string|max:260',
            'Pays' => 'required|string|max:200',
            'Intitule' => 'required|string|max:250',
            'Ville' => 'nullable|string|max:200',
            'Secteur' => 'required|string|max:200',
            'Langue' => 'required|string|max:200',
            'Formation' => 'nullable|string|max:200',
            'organisme' => 'nullable|string|max:200',
            'LinkedIn' => 'nullable|string',
            'twitter' => 'nullable|string|max:250',
            'FaceBook' => 'nullable|string|max:250',
            'Instagram' => 'nullable|string|max:250',
            'Inscription_date145' => 'nullable|date',
        ];
    }
}
