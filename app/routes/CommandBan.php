<?php
session_start();
// get data
$token = $_POST['token'];

// create new class instance 
include_once("../controller/player.php");
$chat = new ChatController;

// call to function in class
$data = json_encode($chat->ban($token));
// return data from server to user
echo $data;
return;

?>