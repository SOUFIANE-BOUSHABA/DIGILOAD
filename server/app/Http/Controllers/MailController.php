<?php

namespace App\Http\Controllers;

use App\Http\Requests\MailRequest;
use App\Services\Contracts\MailServiceInterface;
use Symfony\Component\HttpFoundation\Response;

class MailController extends Controller
{
    protected $mailService;

    public function __construct(MailServiceInterface $mailService)
    {
        $this->mailService = $mailService;
    }

    public function create(MailRequest $request)
    {
        $mail = $this->mailService->createMail($request->validated());

        return response()->json(['message' => 'Mail created successfully', 'mail' => $mail], Response::HTTP_CREATED);
    }
}
