<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MailRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'subject' => 'required|string',
            'mailHeader' => 'required|string',
            'Emailbody' => 'required|string',
            'Emailfooter' => 'required|string|max:500',
            'attachedFile' => 'nullable|string',
            'recipientEmail' => 'required|email',
        ];
    }
}
