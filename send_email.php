<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    // use wordwrap() if lines are longer than 70 characters
    $body = wordwrap($body,70);

    // send email
    mail($to, $subject, $body);
}
?>