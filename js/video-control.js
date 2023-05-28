const videoFrame = document.querySelector('.video-frame');
const playBtn = document.querySelector('.video-control');
const playBtnIcon = document.querySelector('.video-control__icon');

playBtn.addEventListener('click',()=>{
    if(videoFrame.getAttribute('data-play') === 'false'){
        videoFrame.setAttribute('data-play', 'true');
        playBtnIcon.src= './img/pause.svg'
        videoFrame.play()
    } else{
        videoFrame.setAttribute('data-play', 'false');
        playBtnIcon.src = './img/play.svg'
        videoFrame.pause();
    }
})

videoFrame.addEventListener('click',()=>{
    if(videoFrame.getAttribute('data-play') === 'false'){
        videoFrame.setAttribute('data-play', 'true');
        playBtnIcon.src= './img/pause.svg'
        videoFrame.play()
    } else{
        videoFrame.setAttribute('data-play', 'false');
        playBtnIcon.src = './img/play.svg'
        videoFrame.pause();
    }
})





    



