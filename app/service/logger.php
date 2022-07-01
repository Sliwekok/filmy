<?php

Class Logger{

    public function chatLogger($user, $type, $message){
        // get current time
        $time = date('Y-m-d H:i:s');
        $data = array(
            'user' => $user,
            'type' => $type,
            'message' => $message,
            'time' => $time
        );
        $json = json_encode($data);
        // save in the right file
        $this->saveInFile('chat.log', $json);
        return;
    }

    public function commandLogger($user, $type, $message, $timestamp = null){
        // get current time
        $time = date('Y-m-d H:i:s');
        $data = array(
            'user' => $user,
            'type' => $type,
            'message' => $message,
            'time' => $time
        );
        // if timestamp is not null - add to logger array
        if($timestamp){
            array_merge($data, array('timestamp' => $timestamp));
        }
        $json = json_encode($data);
        // save in the right file
        $this->saveInFile('player.log', $json);
        return;
    }

    // save file in the right log file
    private function saveInFile($file, $json){
        $root = dirname(__DIR__, 2);
        $path = $root."/logs/".$file;
        // PHP_EOL - new line on each log
        // FILE_APPEND - append mode 
        file_put_contents($path, $json . PHP_EOL, FILE_APPEND);
    }

}

?>