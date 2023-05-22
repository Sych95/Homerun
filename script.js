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

const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav-burger');

burgerBtn.addEventListener('click',()=>{
    if(!burgerNav.classList.contains('active')){
        burgerNav.classList.add('active')
    } else{
        burgerNav.classList.remove('active') 
    }
})

