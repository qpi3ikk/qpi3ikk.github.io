<?php

$recepient = "qpi3ikk@gmail.com, vitalik-cool@bigmir.net";
$sitename = "12Bytes";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nТекст: $text";

$pagetitle = "Нова заявка с сайту \"$sitename\"";
$headers = 'From:admin@12bytes.com.ua';
mail($recepient, $pagetitle, $message, $headers);
//mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");