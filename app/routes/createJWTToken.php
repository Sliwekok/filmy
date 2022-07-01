<?php
session_start();

include_once('../service/JWT.php');

// get user payload data
$username = htmlspecialchars(strip_tags($_POST['username']));
$color = $_POST['color'];

// create JWT instace
$jwt = new JWT;
$token = $jwt->createJWT($username, $color);

// print token, because it's ajax request
echo $token;
return;

?>