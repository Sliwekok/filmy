<?php
$root =  dirname(__FILE__, 3);
include_once($root.'/vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable($root);
$dotenv->load();

use ReallySimpleJWT\Token;

Class JWT{

    public $secret;

    public function __construct(){
        $this->secret = $_ENV['SECRET'];
    }

    // create JWT token, lifetime: 1 year
    public function createJWT($username, $color){
        $payload = [
            'iat'       => strtotime('now'),    // token create moment
            'exp'       => strtotime('+1 year'),// token expiration
            'admin'     => 0,
            'username'  => $username,           // user connected
            'color'     => $color,              // user selected color on chat 
        ];

        $token = Token::customPayload($payload, $this->secret);
        // create session for user 
        $_SESSION['token'] = $token; 
        return $token;
    }

    // create JWT admin token
    public function adminJWTToken($username, $color){
        $payload = [
            'iat'       => strtotime('now'),    // token create moment
            'exp'       => strtotime('+1 year'),// token expiration
            'admin'     => 1,
            'username'  => $username,           // user connected
            'color'     => $color,              // user selected color on chat 
        ];

        $token = Token::customPayload($payload, $this->secret);
        // create session for user 
        $_SESSION['token'] = $token; 
        return $token;
    }

    // get single data value from token
    public function getJWTData($token, $data){
        $array = Token::getPayload($token, $this->secret);
        return $array["$data"];        
    }

    // check token, it is correct (not hacked)
    public function checkToken($token){
        $secret = $this->secret;
        if(
            Token::validateExpiration($token, $secret) &&    // check if token is not expired
            Token::validate($token, $secret) &&              // check if not hacked
            $token == $_SESSION['token']                     // check if token provided is the same as backend version
        ) return true;
        else{
            $this->deleteToken();
            return false;
        }
    }

    // if token is not valid - send error to frontend and delete session
    private function deleteToken(){
        unset($_SESSION['token']);
        return false;
    }
}

?>