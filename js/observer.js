const elementList = document.querySelectorAll('section')
elementList.forEach((item)=>{
  item.classList.add('hidden')
})

const imgList = document.querySelectorAll('img');
imgList.forEach((item)=> {
    let src = item.getAttribute('src');
    item.src= '';
    item.setAttribute("data-src", src)
})

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0.3
}

const callback = function (entries, observer){
  let count = 0;
  entries.forEach((item,index) =>{
      if(item.isIntersecting && item.target.localName === 'section'){
          item.target.classList.add('showed');
          if(count%2 !== 0){
            item.target.classList.add('slideInRight');
            
          } else {
            item.target.classList.add('slideInLeft');
          }
          count++
          item.target.classList.remove('hidden');
      } else if(item.isIntersecting && item.target.localName === 'img'){
          item.target.src = item.target.getAttribute('data-src')
      }
      
  })
}
let observer = new IntersectionObserver(callback, options);
elementList.forEach(item=>{
  observer.observe(item)
})

imgList.forEach((item)=>{
  observer.observe(item)
})