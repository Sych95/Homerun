const elementList = document.querySelectorAll('section')
const imgList = document.querySelectorAll('img');
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
      if(item.isIntersecting && item.target.localName === 'section'){
          console.log(item.target.localName);
          item.target.classList.add('showed');
          item.target.classList.remove('hidden');
      } else if(item.isIntersecting && item.target.localName === 'img'){
          console.log(item)
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