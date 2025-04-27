<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $fullName    = htmlspecialchars(trim($_POST['fullName']));
    $phone       = htmlspecialchars(trim($_POST['phoneNumber']));
    $email       = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $productName = htmlspecialchars(trim($_POST['productName']));
    $quantity    = intval($_POST['quantity'] ?? 1);
    $notes       = htmlspecialchars(trim($_POST['notes']));

    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $quantity < 1) {
        header('Location: order_error.php');
        exit;
    }

    $mail = new PHPMailer(true);
    try {
       
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'aqwedsawr@gmail.com';
        $mail->Password   = 'qilt sfnm iuzo dwat';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('aqwedsawr@gmail.com', 'Customer Support');
        $mail->addAddress('aqwedsawr@gmail.com', 'Recipient Name');
        $mail->addReplyTo($email, $fullName);

        $mail->Subject = 'New Customer Inquiry ';
        $mail->Body    =
            "Customer Name: $fullName\n" .
            "اسم العميل: $fullName\n\n" .
            "Phone Number: $phone\n" .
            "رقم الهاتف: $phone\n\n" .
            "Email: $email\n" .
            "البريد الإلكتروني: $email\n\n" .
            "Product Name: $productName\n" .
            "اسم المنتج: $productName\n\n" .
            "Quantity: $quantity\n" .
            "الكمية المطلوبة: $quantity\n\n" .
            "Notes: $notes\n" .
            "ملاحظات: $notes\n";

        if ($mail->send()) {
            header('Location: order_successful.php');
            exit;
        } else {
            header('Location: order_error.php');
            exit;
        }
    } catch (Exception $e) {
        header('Location: order_error.php');
        exit;
    }
}
