<?php

namespace App\Services\Implementations;

use App\Mail\MailNotification;
use App\Models\Mail;
use App\Repositories\Contracts\MailRepositoryInterface;
use App\Services\Contracts\MailServiceInterface;
use Illuminate\Support\Facades\Mail as MailFacade;

class MailService implements MailServiceInterface
{
    protected $mailRepository;

    public function __construct(MailRepositoryInterface $mailRepository)
    {
        $this->mailRepository = $mailRepository;
    }

    public function createMail(array $data): Mail
    {
        // Save the mail data to the database
        $mail = $this->mailRepository->create($data);

        // Send the email
        MailFacade::to($data['recipientEmail'])->send(new MailNotification(
            $data['subject'],
            $data['mailHeader'],
            $data['Emailbody'],
            $data['Emailfooter']
        ));

        return $mail;
    }
}
