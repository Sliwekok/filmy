<?php

include_once($_SERVER['DOCUMENT_ROOT']."/app/service/pusher.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/logger.php");


Class AdminModel{

    private $pusher;
    private $jwt;
    public function __construct(){
        $this->pusher = new Pusher;
        $this->jwt = new JWT();
    }

    // create admin JWT token
    public function createAdminToken($token){
        
        $username = $this->jwt->getJWTData($token, 'username');
        $color = $this->jwt->getJWTData($token, 'color');

        // create new token
        $newToken = $this->jwt->adminJWTToken($username, $color);

        // save in logs 
        $logger = new Logger;
        $logger->commandLogger($username, "command", "admin");

        return $newToken;
    }

    // show all movies in video directory
    public function getMovies(){
        $path = $_SERVER['DOCUMENT_ROOT']."/src/public/video/";
        $files = glob($path. "*.mp4");

        return $files;
    }

    // get latest commands logs
    public function getCommandLogs($amount){

        $logs = array();
        $file = fopen($_SERVER['DOCUMENT_ROOT']."/logs/player.log", "r");

        while(!feof($file)){
            $line = fgets($file);
            array_push($logs, $line);
            if(count($logs) > $amount + 1){
                array_shift($logs);
            }
        }

        // fix last array item beeing empty by removing it from main array
        $logs = array_slice($logs, 0, 10);

        return $logs;
    }

    // change current movie in txt file to load the right one since we don't use DB 
    public function changeMovie($movie){
        $file = $_SERVER['DOCUMENT_ROOT']."/src/public/video/current.txt";
        file_put_contents($file, $movie);
        return true;
    }    

}

?>