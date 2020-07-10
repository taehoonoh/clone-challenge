var btn = document.querySelector('.modal_close');
var blockout = document.querySelector('#blackout')
var play = document.querySelector('.play')
var body = document.querySelector('body')
var iframe = document.querySelector('iframe')

play.addEventListener('click',function(){
    blockout.style.display = "block"
    body.classList.add('modal_on')
    iframe.src="https://www.youtube.com/embed/Fs3as4T6Rlo"
})


btn.addEventListener('click',function(){
    blockout.style.display = "none"
    body.classList.remove('modal_on')
    iframe.src=null
})

