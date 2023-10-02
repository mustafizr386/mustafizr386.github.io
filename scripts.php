<?php
$from = "From: <" . $_GET["From"] . ">";
$to = "jafforock3@gmail.com";
$subject = $_GET["Subject"];
$message = $_GET["Content"];

mail($to,$subject,$message,$from);
?>