<?php
session_start();
// get data
$token = $_POST['token'];
$password = $_POST['password'];

// create new class instance 
include_once("../controller/admin.php");
$admin = new AdminController;

// call to function in class
$data = $admin->createAdminAccess($token, $password);
// return data from server to user
echo $data;
return;

?>