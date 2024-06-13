<!-- resources/views/emails/notification.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>{{ $subject }}</title>
</head>
<body>
    <h1>{{ $mailHeader }}</h1>
    <p>{{ $Emailbody }}</p>
    <footer>
        <p>{{ $Emailfooter }}</p>
    </footer>
</body>
</html>
