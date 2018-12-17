<?php

$recepient = "qpi3ikk@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$headers = 'From:admin@qpi3ik.zzz.com.ua';
mail($recepient, $pagetitle, $message, $headers);
//mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");