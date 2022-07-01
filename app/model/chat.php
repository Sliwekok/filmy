<?php

include_once($_SERVER['DOCUMENT_ROOT']."/app/service/pusher.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/logger.php");

Class ChatModel{

    private $pusher;
    private $jwt;
    public function __construct(){
        $this->pusher = new Pusher;
        $this->jwt = new JWT();
    }

    // send message to users
    public function sendUsersMessage($token, $message){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'message'   => htmlspecialchars(strip_tags($message)),
            'color'     => $this->jwt->getJWTData($token, 'color')
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->chatLogger($user, "message", $message);

        $this->pusher->sendMessagetoUser($data);
        return;
    }

    // send user is banned
    public function banUser($token){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'command'   => "ban",
            'commandDescription'   => 'has been banned for some time'
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->commandLogger($user, "command", "ban");

        $this->pusher->sendCommandToUser($data);
        return;
    }

}

?>