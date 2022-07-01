<?php
session_start();
// add ENV variables
require_once('vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
require_once("app/controller/admin.php");
require_once("app/service/JWT.php");

$jwt = new JWT();
// check if token is valid
if(!$_SESSION['token']) header('Location: /');
// check if token is with admin 
$isAdmin = $jwt->getJWTData($_SESSION['token'], 'admin');
if ($isAdmin === false){
    die("You need to be admin to access admin panel");
}
$admin = new AdminController;
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WatchTogether Admin Panel</title>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"defer></script>
    <script src="https://js.pusher.com/7.1/pusher.min.js" defer></script>
    <script src="./src/public/js/app.js" defer></script>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">

    <!-- Styles -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid" id="adminPanel">
    <div class="row">
        <div id="backgroundImage"> </div>
        <div id="content" class="col-12">
            <div class="col-12 text-center"><h1>Admin Web Panel</h1></div>
            <div class="col-12 text-center currentlyWatched"><b><?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']. "/src/public/video/current.txt")?></b> is currently watched</div>
            <div class="inline-flex col-12">
                <div class="col-7" id="movies">
                    <div class="row">
                        <div class="col-6 changeCurrentMovie">
                            <p><b>Change</b> what will be played next!</p>
                            <select id="currentMovie" name="currentMovie">
                                <?php
                                    $movies = $admin->getMovies();
                                    foreach ($movies as $movie) {
                                        $movieName = basename($movie, ".mp4");
                                        echo "<option value='$movieName'>$movieName</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="col-6 uploadNew">
                            <p><b>Upload</b> new movie</p>
                            <form id="updateMovie">
                                <label>
                                    Add file here:
                                    <input type="file" name="file">
                                </label>
                                <input type="submit" value="Upload" class="btn btn-primary">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-5" id="logs">
                    <div class="col-12">
                        <p class="col-12" id="title">Logs of truth</p>
                        <?php
                            // there's number of logs
                            $logs = $admin->getCommandLogs(10);
                            $i = 1;
                            foreach ($logs as $log) {
                                $log = json_decode($log, true);
                                echo "<p class='log'><b>". $i. ". ".  $log['user']."</b> has used ".$log['message']." command at: ". $log['time'].  "</p>";
                                $i++;
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>