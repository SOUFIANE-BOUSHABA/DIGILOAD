<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $mailHeader;
    public $Emailbody;
    public $Emailfooter;
    public $attachedFile;

    public function __construct($subject, $mailHeader, $Emailbody, $Emailfooter)
    {
        $this->subject = $subject;
        $this->mailHeader = $mailHeader;
        $this->Emailbody = $Emailbody;
        $this->Emailfooter = $Emailfooter;
    }

    public function build()
    {
        $email = $this->subject($this->subject)
            ->view('emails.notification')
            ->with([
                'mailHeader' => $this->mailHeader,
                'Emailbody' => $this->Emailbody,
                'Emailfooter' => $this->Emailfooter,
            ]);

     

        return $email;
    }
}
