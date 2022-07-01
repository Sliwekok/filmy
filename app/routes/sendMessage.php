<?php
session_start();
// get data
$message = $_POST['message'];
$token = $_POST['token'];

// create new class instance 
include_once("../controller/chat.php");
$chat = new ChatController;

// call to function in class
$data = json_encode($chat->sendChatMessage($message, $token));
// return data from server to user
echo $data;
return;

?>