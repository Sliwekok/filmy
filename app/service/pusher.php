<?php

$root =  dirname(__FILE__, 3);
include_once($root.'/vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable($root);
$dotenv->load();

Class Pusher{

    // sends message to chat via pusher. 
    public function sendMessagetoUser($data, $event = "sendMessageOnChat", $channel = "chat"){
        $pusher = $this->pusherCredentials();

        $pusher->trigger($channel, $event, $data);
        return;
    }

    // sends command to chat via pusher. 
    public function sendCommandToUser($data, $event = "sendCommandOnChat", $channel = "chat"){
        $pusher = $this->pusherCredentials();

        $pusher->trigger($channel, $event, $data);
        return;
    }

    private function pusherCredentials(){
        $options = $this->pusherOptions();
        return new Pusher\Pusher(
            $_ENV['PUSHER_KEY'],
            $_ENV['PUSHER_SECRET'],
            $_ENV['PUSHER_APP_ID'],
            $options
        );
    }
    
    private function pusherOptions(){
        return array(
            'cluster' => $_ENV['PUSHER_CLUSTER'],
            'useTLS' => true
        );
    }
}

?>