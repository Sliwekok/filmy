<?php
session_start();

$currentMovie = file_get_contents($_SERVER['DOCUMENT_ROOT']. "/src/public/video/current.txt");
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WatchTogether</title>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"defer></script>
    <script src="https://js.pusher.com/7.1/pusher.min.js" defer></script>
    <script src="https://vjs.zencdn.net/7.19.2/video.min.js" defer></script>
    <script src="./src/public/js/app.js" defer></script>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">

    <!-- Styles -->
    <!-- Video.js base CSS -->
    <link href="https://unpkg.com/video.js@7/dist/video-js.min.css" rel="stylesheet"/>
    <!-- City theme for Video.js -->
    <link href="https://unpkg.com/@videojs/themes@1/dist/city/index.css" rel="stylesheet"/>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <div id="player" class="col-10">
                <video class="video-js vjs-theme-city vjs-16-9 vjs-big-play-centered" id="video" controls>
                    <source src="src/public/video/<?php echo $currentMovie ?>.mp4" type="video/mp4">
                </video>
            </div>
            <div id="chat" class="col-2">
                <div class="row">
                    <div class="col-12" id="messages">
                        <div class="row message">
                            <div class="col-12">
                                <span>You're now connected!</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form autocomplete="off" id="sendMessage" class="col-12">
                            <div class="col-12">
                                <input type="text" class="col-12" name="message" id="messageBox" required placeholder="Start typing here ...">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- this is showed for user username to provide JWT token for CSRF protection  -->
    <div id="setUsername">
        <h2>Write your username here first!</h2>
        <form id="createUsername">
            <input type="text" placeholder="(Yes, you have to)" id="username" autocomplete="off">
        </form>
    </div>

</body>
</html>