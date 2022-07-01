<?php
session_start();
// get data
$token = $_POST['token'];

// create new class instance 
include_once("../controller/player.php");
$player = new PlayerController;

// call to function in class
$data = $player->synchronizePlayers($token);
// return data from server to user
echo $data;
return;

?>