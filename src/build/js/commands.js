import Cookies from 'js-cookie';
import { Player } from './player';

// This file is responsible for chat commands
// every command start with !bot or !Krystian (it's just bot second name lol)

export function callBot(text){
    let token = Cookies.get('token'),
        command = text.split(" ");

    // depending on bot command call right function
    switch(command[1]){
        case "help":
            writeHelpCommands();
            break;
        case "play":
            continueMovie(token);
            break;
        case "pause":
            stopMovie(token);
            break;
        case "ban":
            banUserWhoCalledFunction(token);
            break;
        case "set":
            setMovieTimeAt(token, command[2]);
            break;
        case "time":
            showCurrentTime();
            break;
        case "forward":
            forwardMovie(token, command[2]);
            break;
        case "back":
            rewindMovie(token, command[2]);
            break;
        // add invisible command to grant admin access to admin panel
        case "admin":
            grantAdmin(token);
            break;
        default:
            NoCommandFound();
            break;
    }
    return;
}

// forward movie by x time (in seconds)
function forwardMovie(token, time){ 
    // ajax request to backend with command    
    $.ajax({
        url: `/app/routes/CommandForward.php`,
        method: 'POST',
        data: {token: token, time: time},
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
    return;
}

// back movie by x time (in seconds)
function rewindMovie(token, time){ 
    // ajax request to backend with command    
    $.ajax({
        url: `/app/routes/CommandBack.php`,
        method: 'POST',
        data: {token: token, time: time},
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
    return;
}
// grant admin access
function grantAdmin(token){
    let inbox = prompt("Enter admin password:");
    // validate data
    if(inbox == null || inbox == ""){
        alert("Provide any password");
        return;
    }
    // pułapka na dizla XD
    // added toLowerCase to be sure dizl will find it out
    if(inbox.toLowerCase() == "dobnet"){
        alert("próbuj dalej dizl boi");
        return;
    }
    $.ajax({
        url: `/app/routes/CommandGrantAdmin.php`,
        method: 'POST',
        data: {token: token, password: inbox},
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            // overwrite existing token with new token
            Cookies.remove('token');
            Cookies.set('token', data);
            // show admin panel webpage
            window.open(window.location.href + "/admin.php");
            return true;
        }
    });

}

// show possible commands
function writeHelpCommands(){
    let text = `<div class="row command"><div class="col-12"><span><b>Bot Krystian</b> heard you're looking for help, hm?<br>Well, there are command that (even) you can run!<br>Just Type <b>!bot</b> or <b>!Krystian</b> and choose your command <b><i>wisely</i></b><ul><li><b>play</b> - continues to play video</li><li><b>pause</b> - stops video</li><li><b>time</b> - shows current movie time</li><li><b>set [mm]:[ss]</b> - sets movie time for all participants in given time!</li><li><b>forward [ss]</b> - move player by x seconds forwrd</li><li><b>back [ss]</b> - move player by x seconds back in time</li><li><b>ban 'user'</b> - ban mentioned user (don't know for how long tho)</li></ul>(psst, only you and <i>Krystian</i> knows you needed help, but remember - don't be ashamed of it)</span></div></div>`;
    // append message to div
	$("#messages").append(text);
}

// ban user that wanted to ban the other one just for fun
function banUserWhoCalledFunction(token){
    // if there was an error in request - don't give ban to user
    // (JUSTICE FOR EVERYONE)
    let req = $.ajax({
        url: `/app/routes/CommandBan.php`,
        method: 'POST',
        data: {token: token},
        dataType:"json",
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
    if(!req) return;
    // time between 30-60 seconds 
    let time = Math.floor( Math.random() * ( 1 + 60 - 30 ) ) + 30;
    // set cookie for it
    Cookies.set('ban', time);
    // create timer 
    let timeLeft = setInterval(function () {
        // if ban time is over - clear cookie
        if(time == 0){
            clearInterval(timeLeft);
            Cookies.remove('ban');
            return;
        }
        time--;
        Cookies.set('ban', time);
    }, 1000);

    return;
}

// if no command is found - show a helper message
function NoCommandFound(){
    let text = `<div class="row command"><div class="col-12"><span><b>Bot Krystian</b> couldn't find out what do you mean. Check possible commands writing <b>!krystian help</b></span></div></div>`;
    // append message to div
    $("#messages").append(text);
}


// set movie at the same time for all users
function setMovieTimeAt(token, timestamp){
    // check if timestamp is correct and not null
    if(timestamp.split(":")[0] == null || timestamp.split(":")[1] == null || timestamp.split(":")[1].length == 0){
        let text = `<div class="row command"><div class="col-12"><span><b>Bot Krystian</b> found an error! You must give time in that format: <b>MM:SS</b></span></div></div>`;
        $("#messages").append(text);
        return;
    }
    // ajax request to backend with command
    $.ajax({
        url: `/app/routes/CommandSetTime.php`,
        method: 'POST',
        data: {token: token, timestamp: timestamp},
        dataType:"json",
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
    return;
}

// continue movie for all
function continueMovie(token){
    // ajax request to backend with command
    $.ajax({
        url: `/app/routes/CommandPlay.php`,
        method: 'POST',
        data: {token: token},
        dataType:"json",
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
}

// stop movie for all
function stopMovie(token){
    // ajax request to backend with command
    $.ajax({
        url: `/app/routes/CommandPause.php`,
        method: 'POST',
        data: {token: token},
        dataType:"json",
        error: function(error){
            console.log(error);
            return false;
        },
        success: function(data){
            return true;
        }
    });
    return;
}

function showCurrentTime(){
    let player = new Player(),
        time = player.showCurrentTime();
    let text = `<div class="row command"><div class="col-12"><span><b>Bot Krystian</b> says you're at ${time}</span></div></div>`;
    // append message to div
    $("#messages").append(text);
}