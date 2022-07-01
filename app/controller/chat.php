<?php
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/model/chat.php");

Class ChatController{

    private $jwt;
    public function __construct(){
        $this->jwt = new JWT();
        // check if it's POST method
        if(!$this->checkReqMethod($_SERVER['REQUEST_METHOD'])){
            http_response_code(403);
            return "Bad method Request";
        }
    }

    // send message to chat 
    public function sendChatMessage($message, $token){

        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }
        $model = new ChatModel;
        // create array with data for model
        $model->sendUsersMessage($token, $message);
        return true;
        
    }

    // ban user from chat for some time
    public function ban($token){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }
        $model = new ChatModel;
        $model->banUser($token);
        return true;
    }

    // check for POST request method
    private function checkReqMethod($method){
        return $method == "POST" ? true : false;
    }
}

?>