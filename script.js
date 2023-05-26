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
        burgerNav.classList.add('active');
        burgerNav.classList.remove("slideOutUp");
        burgerNav.classList.add("slideInDown");
        burgerBtn.classList.remove('burger-off');
        burgerBtn.classList.add('burger-on')
    } else{
        burgerNav.classList.remove("slideInDown");
        burgerNav.classList.add("slideOutUp");
        setTimeout(()=> burgerNav.classList.remove('active'), 900)
        burgerBtn.classList.remove('burger-on');
        burgerBtn.classList.add('burger-off')
    }
})

