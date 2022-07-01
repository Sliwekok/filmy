<?php
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/model/player.php");

Class PlayerController
{
    private $jwt;
    public function __construct(){
        $this->jwt = new JWT();
    }

    // start movie player
    public function play($token){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }
        $model = new PlayerModel;
        $model->startPlayer($token);
        return true;
    }

    // stop movie player
    public function pause($token){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }

        $model = new PlayerModel;
        $model->pausePlayer($token);
        return true;
    }

    // synchronize all players 
    public function setTime($token, $timestamp){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }

        $model = new PlayerModel;
        $model->setPlayerAt($token);
        return true;
    }

    // forward all players by x seconds
    public function forward($token, $time){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }

        $model = new PlayerModel;
        $model->forwardTimeBy($token, $time);
        return true;
    }

    // back in time all players by x seconds
    public function back($token, $time){
        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }

        $model = new PlayerModel;
        $model->backTime($token, $time);
        return true;
    }

}

?>