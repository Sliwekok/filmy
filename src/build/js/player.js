export class Player{
    
    constructor(){
        this.player = videojs('video');
    }

    setMovieTimeAt(time){    
        let timeInSeconds = this.timeToSeconds(time);
        this.player.currentTime(timeInSeconds);
        this.player.play();
        return true;
    }
    
    // transfer format mm:ss to seconds length 
    timeToSeconds(time){
        let seconds = time.toString().split(":")[1],
        minutes = time.toString().split(":")[0];
        
        return +minutes*60 + +seconds;
    }

    stopMovie(){
        this.player.pause();
        return;
    }

    playMovie(){
        this.player.play();
    }

    rewind(time){
        let currentTime = this.player.currentTime(),
            newTime = currentTime - time;
        this.player.currentTime(newTime);
    }
    
    forwardMovie(time){
        let currentTime = this.player.currentTime(),
            newTime = +currentTime + +time;
        this.player.currentTime(newTime);
    }

    // get current movie time in format mm:ss
    showCurrentTime(){
        let time = this.player.currentTime(),
            minutes = Math.floor(time / 60),
            seconds = Math.floor(time - minutes * 60);
        return `${minutes}:${seconds}`;
    }

}