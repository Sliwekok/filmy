import {Player} from './player'; 
// Enable pusher logging - don't include this in production
Pusher.logToConsole = false;

var pusher = new Pusher('85c7e729ddbd4949bdcf', {
  cluster: 'eu'
});

const chat = pusher.subscribe('chat');
// user written message to show on chat
chat.bind('sendMessageOnChat', function(data){
	let user = data["user"],
		message = data["message"],
		color = data["color"],
		html = `<div class='row message'><div class='col-12'><span class='user' style='color: ${color};'>${user}: </span><span class='text'>${message}</span></div></div>`;
	// append message to div
	$("#messages").append(html);
	// scroll to the bottom of chat div
	let div = document.getElementById('messages');
	div.scrollTop = div.scrollHeight;
	return;
});
chat.bind('sendCommandOnChat', function(data){
	let	user = data["user"],
		command = data["command"],
		commandDescription = data["commandDescription"],
		text = `<div class="row command"><div class="col-12"><span><b>${user}</b> ${commandDescription}</span></div></div>`;
	let videoJS = new Player();
	
	// call right command handler
	switch(command){
		case "play":
        	videoJS.playMovie();
			break;
		case "pause":
        	videoJS.stopMovie();
			break;
		case "setAt":
        	videoJS.setMovieTimeAt(data['timestamp']);
			break;
		case "forward":
			videoJS.forwardMovie(data['timestamp']);
			break;
		case "back":
			videoJS.rewind(data['timestamp']);
			break;
		default:
			break;
	}
	// append command message chat
	$("#messages").append(text);
	
	// scroll to the bottom of chat div
	let div = document.getElementById('messages');
	div.scrollTop = div.scrollHeight;

});
