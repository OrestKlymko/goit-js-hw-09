const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
stop.setAttribute('disabled',false)
let timeId


start.addEventListener('click', ()=>{
  stop.removeAttribute('disabled')
  start.setAttribute('disabled',false)



  timeId = setInterval(function(){

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  body.style.backgroundColor=getRandomHexColor()

},1000)})


stop.addEventListener('click',()=>{
  start.removeAttribute('disabled')
  stop.setAttribute('disabled',false)
  clearInterval(timeId);
})



