let video = document.querySelector('video');
let playButton = document.querySelector('#play');
let pauseButton = document.querySelector('#pause');
let muteButton = document.querySelector('#mute');
let time = document.querySelector('#time');

playButton.addEventListener('click', function() {
  video.play();
});

pauseButton.addEventListener('click', function() {
    video.pause();
  });

muteButton.addEventListener('click', function() { 
video.muted = !video.muted;
});

video.addEventListener('timeupdate', function() { 
    
    time.innerText = Math.round(video.currentTime);
    console.log(video.currentTime);
    });
    

