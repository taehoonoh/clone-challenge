var btn = document.querySelector('.modal_close');
var blockout = document.querySelector('#blackout')
var play = document.querySelector('.play')
var body = document.querySelector('body')
var iframe = document.querySelector('iframe')

play.addEventListener('click',function(){
    blockout.style.display = "block"
    body.classList.add('modal_on')
    iframe.src="https://s3550.smartucc.kr/encodeFile/3550/2020/07/29/d1f40cdcd40da5bab8e6d5471b70299a_W.mp4"
})


btn.addEventListener('click',function(){
    blockout.style.display = "none"
    body.classList.remove('modal_on')
    iframe.src=null
})

