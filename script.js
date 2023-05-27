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
        burgerNav.classList.add('lightSpeedIn');
        setTimeout(()=>burgerNav.classList.remove('lightSpeedIn'),700);
        burgerBtn.classList.remove('burger-off');
        burgerBtn.classList.add('burger-on')
    } else{
        burgerNav.classList.add('lightSpeedOut')
        setTimeout(()=> burgerNav.classList.remove('lightSpeedOut'), 700)
        setTimeout(()=>burgerNav.classList.remove('active'), 700)
        burgerBtn.classList.remove('burger-on');
        burgerBtn.classList.add('burger-off')
    }
})



  const elementList = document.querySelectorAll('section')
  elementList.forEach((item)=>{
    item.classList.add('hidden')
  })

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.3
  }

  const callback = function (entries, observer){
    entries.forEach(item =>{
        if(item.isIntersecting){
            item.target.classList.add('showed');
            item.target.classList.remove('hidden')
        }
    })
  }
  let observer = new IntersectionObserver(callback, options);
  elementList.forEach(item=>{
    observer.observe(item)
  })
    



