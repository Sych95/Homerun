const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav-burger');

burgerBtn.addEventListener('click',(e)=>{
    if(!burgerNav.classList.contains('active')){
        burgerNav.classList.add('active');
        burgerNav.classList.add('lightSpeedIn');
        setTimeout(()=>burgerNav.classList.remove('lightSpeedIn'), 700);
        burgerBtn.classList.remove('burger-off');
        burgerBtn.classList.add('burger-on');
    } else{
        burgerNav.classList.add('lightSpeedOut')
        setTimeout(()=> burgerNav.classList.remove('lightSpeedOut'), 700);
        setTimeout(()=>burgerNav.classList.remove('active'), 700);
        burgerBtn.classList.remove('burger-on');
        burgerBtn.classList.add('burger-off');
    }
})