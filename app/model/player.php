<?php

include_once($_SERVER['DOCUMENT_ROOT']."/app/service/pusher.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/logger.php");

Class PlayerModel{

    private $pusher;
    private $jwt;
    public function __construct(){
        $this->jwt = new JWT();
        $this->pusher = new Pusher;
    }

    // start player for all users
    public function startPlayer($token){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'command'   => 'play',
            'commandDescription'   => 'has unpaused video'
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->commandLogger($user, "command", "play");
        
        $this->pusher->sendCommandToUser($data);
        return;
    }

    // stops player for all users
    public function pausePlayer($token){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'command'   => 'pause',
            'commandDescription'   => 'has paused video'
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->commandLogger($user, "command", "pause");

        $this->pusher->sendCommandToUser($data);
        return;
        
    }

    // set player at the specific timestamp for all users
    public function setPlayerAt($token, $timestamp){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'timestamp' => $timestamp,
            'command'   => 'setAt',
            'commandDescription'   => "set movie time at: <b>$timestamp</b>" 
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->commandLogger($user, "command", "setAt", $timestamp);

        $this->pusher->sendCommandToUser($data);
        return;
    }

    // forward player for all users
    public function forwardTimeBy($token, $time){
        $user = $this->jwt->getJWTData($token, 'username');
        $data = array(
            'user'      => $user,
            'timestamp' => $time,
            'command'   => 'forward',
            'commandDescription'   => "has forwarded video by $time seconds"
        );
        // add logger to store up informations
        $logger = new Logger;
        $logger->commandLogger($user, "command", "forward", $time);
        
        $this->pusher->sendCommandToUser($data);
        return;
    }

        // forward player for all users
        public function backTime($token, $time){
            $user = $this->jwt->getJWTData($token, 'username');
            $data = array(
                'user'      => $user,
                'timestamp' => $time,
                'command'   => 'back',
                'commandDescription'   => "has rewinded video by $time seconds"
            );
            // add logger to store up informations
            $logger = new Logger;
            $logger->commandLogger($user, "command", "back", $time);
            
            $this->pusher->sendCommandToUser($data);
            return;
        }

}

?>