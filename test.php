<?php
session_start();
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
$jwt = new JWT();
echo $jwt->getJWTData($_SESSION['token'], 'admin');

?>