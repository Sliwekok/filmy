<?php
include_once($_SERVER['DOCUMENT_ROOT']."/app/service/JWT.php");
include_once($_SERVER['DOCUMENT_ROOT']."/app/model/admin.php");


$dotenv = Dotenv\Dotenv::createImmutable(dirname(__FILE__, 3));
$dotenv->load();

Class AdminController{

    private $jwt;
    public function __construct(){
        $this->jwt = new JWT();
    }

    public function createAdminAccess($token, $password){

        // check for token validation
        if(!$this->jwt->checkToken($token)){
            http_response_code(401);
            return "Bad token. Please, refresh the page";
        }

        // check if password is correct
        if($password !== $_ENV['ADMIN_KEY']){
            http_response_code(403);
            return "Bad credentials";
        }   

        $admin = new AdminModel;
        $newToken = $admin->createAdminToken($token);

        return $newToken;
    }


    // get all movies downloaded
    public function getMovies(){
        $model = new AdminModel;
        $movies = $model->getMovies();
        return $movies;
    }

    // get latest logs of commands
    public function getCommandLogs($amount){
        $model = new AdminModel;
        $movies = $model->getCommandLogs($amount);
        return $movies;
    }

    // change current movie that will be played on load of the index page
    public function changeCurrentMovie($movie, $token){
        if($this->checkAdmin($token) === false){
            http_response_code(401);
            return "No admin privileges";
        }
        $model = new AdminModel;
        $movie = $model->changeMovie($movie);
        return true;
    }

    // check for admin privileges
    private function checkAdmin($token){
        $isAdmin = $this->jwt->getJWTData($token, 'admin');
        if($isAdmin === 1) return true;
        else return false;
    }

}

?>