// allow scss files to be compiled
import "../scss/app.scss";
import * as BotCommands from './commands.js';
import './bootstrap.js';
import './token.js';
import './player.js';
import './admin.js';
import Cookies from 'js-cookie';

// send message to server 
$(document).on("submit", "#sendMessage", function(e){
    e.preventDefault();
    // from message trim all extra whitespaces
    let message = $("#messageBox").val().replace(/\s+/g,' ').trim(),
        token = Cookies.get('token');
    // token validation is server-side
    
    // check if user has short ban on chat 
    if(userIsBanned()) return false;

    // if message is command to bot - enable bot 
    if(checkIfMessageIsCommand(message)) BotCommands.callBot(message);
    else sendMessageToServer(message, token);
    // trim form field 
    $("#messageBox").val("");
    return;
});

function sendMessageToServer(message, token){ 
    $.ajax({
        url: '/app/routes/sendMessage.php',
        method: 'POST',
        data: {message: message, token: token},
        error: function(xhr, status, error){
            // console.log(error);
            showErrorMessage(xhr.responseText);
            return false;
        },
        success: function(data){
            // console.log(data);
            return true;
        }
    });
}

// check if commands is bot command
function checkIfMessageIsCommand(message){
    // check first char to check if command is properly executed
    
    // if message doesn't start with ! - return
    if(message.charAt(0) !== '!') return false;
    
    // these are bot names
    const botName = ['bot', 'krystian'];
    let firstWord = message.replace(/ .*/,'').replace("!", "").toLowerCase();
    // check if first word is bot name to call him
    if(firstWord == botName[0] || firstWord == botName[1]) return true;
    else return false;
}

// on enter click focus on send message form
$(document).keypress(function (e) { 
    if(e.which == 13){
        $('#messageBox').focus();
    }
});



// check if user is still banned
function userIsBanned(){
    let time = Cookies.get('ban');
    if(time > 0) return true;
    return false;
}


// on error show error message and delete cookies
export function showErrorMessage(message){
	if(confirm('Error: ' + message) == true){
		let  cookies = document.cookie.split(";");

        // delete all the cookies
		for (var i = 0; i < cookies.length; i++) {
			let cookie = cookies[i],
				eqPos = cookie.indexOf("="),
				name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			// expire cookie to auto delet it
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
		// reload page
		window.location.reload(true);
	}
}

// on fully load, initialize videojs
$(document).ready(function(){
    let options = {
        "fluid": true,
        controlBar: {
            playToggle: false,
            captionsButton: false,
            chaptersButton: false,            
            subtitlesButton: false,
            remainingTimeDisplay: true,
            progressControl: {
              seekBar: false
            },
            pictureInPictureToggle: false,
            fullscreenToggle: true,
            playbackRateMenuButton: false,
          },
    };
    videojs('video', options);
    return
});
