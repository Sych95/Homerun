const videoFrame = document.querySelector('.video-frame');
console.log(videoFrame.muted)
const playBtn = document.querySelector('.video__controller');

playBtn.addEventListener('click',()=>{
    if(videoFrame.getAttribute('data-play') === 'false'){
        videoFrame.setAttribute('data-play', 'true');
        videoFrame.play()
    } else{
        videoFrame.setAttribute('data-play', 'false');
        videoFrame.pause();
    }
})