<?php
session_start();
// get data
$token = $_POST['token'];
$timestamp = $_POST['timestamp'];

// create new class instance 
include_once("../controller/player.php");
$player = new PlayerController;

// call to function in class
$data = json_encode($player->setTime($token, $timestamp));
// return data from server to user
echo $data;
return;

?>