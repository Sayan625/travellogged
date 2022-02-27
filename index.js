const track =document.querySelector('.carousel-track')
const slides =Array.from(track.children)
const nextBtn=document.querySelector('.c-btn-right')
const prevBtn=document.querySelector('.c-btn-left')
const nav= document.querySelector('.carousel-nav')
const dots=Array.from(nav.children)


const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((element,index)=>{
  element.style.left = slideWidth *index +"px";
})

function moveSlide(currentSlide,targetSlide){
  track.style.transform =`translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

nextBtn.addEventListener('click', e=>{
  const currentSlide=track.querySelector('.current-slide')
  const nextSlide= currentSlide.nextElementSibling
  const currentDot=nav.querySelector('.current-slide')
  const slideIndex=slides.findIndex(element=> element === nextSlide)
  const targetDot=dots[slideIndex]
  targetDot.classList.add('current-slide')
  currentDot.classList.remove('current-slide')

  moveSlide(currentSlide,nextSlide)
})

prevBtn.addEventListener('click', e=>{
  const currentSlide=track.querySelector('.current-slide')
  const prevSlide= currentSlide.previousElementSibling
  const currentDot=nav.querySelector('.current-slide')
  const slideIndex=slides.findIndex(element=> element === prevSlide)
  const targetDot=dots[slideIndex]
  targetDot.classList.add('current-slide')
  currentDot.classList.remove('current-slide')
  moveSlide(currentSlide,prevSlide)
})

nav.addEventListener('click',e=>{
  const target= e.target.closest("button")
  
  if(!target) return

  const currentSlide=track.querySelector('.current-slide')
  const currentDot=nav.querySelector('.current-slide')
  const targetIndex= dots.findIndex(element => element === target)
  const targetSlide =slides[targetIndex]
  moveSlide(currentSlide,targetSlide)
  currentDot.classList.remove('current-slide')
  target.classList.add('current-slide')

})