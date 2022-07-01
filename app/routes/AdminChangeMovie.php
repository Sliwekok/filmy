<?php
session_start();
// get data
$movie = $_POST['movie'];
$token = $_POST['token'];

// create new class instance 
include_once("../controller/admin.php");
$admin = new AdminController;

// call to function in class
$data = json_encode($admin->changeCurrentMovie($token, $movie));
// return data from server to user
echo $data;
return;

?>