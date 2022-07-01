<?php
session_start();
// get data
$token = $_POST['token'];
$time = $_POST['time'];

// create new class instance 
include_once("../controller/player.php");
$player = new PlayerController;

// call to function in class
$data = json_encode($player->back($token, $time));
// return data from server to user
echo $data;
return;

?>