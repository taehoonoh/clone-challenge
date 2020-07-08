// 영화 탭메뉴
var movBtn = document.querySelectorAll('.movie_title > ul >li');
var movCont = document.querySelectorAll('.movie_chart > div');

    for(var i=1; i<movCont.length;i++){
        movCont[i].style.display ="none";
    };
    
    movBtn[0].addEventListener('click',function(){
        event.preventDefault();
        for(var i = 0; i<movCont.length;i++){
            movCont[i].style.display ="none";
            movCont[0].style.display ="flex";
            movBtn[i].classList.remove('active');
        }
        this.classList.add('active');
        });

        movBtn[1].addEventListener('click',function(){
        event.preventDefault();
        for(var i = 0; i<movCont.length;i++){
            movCont[i].style.display ="none";
            movCont[1].style.display ="flex";
            movBtn[i].classList.remove('active');
        }
        this.classList.add('active');
        });

        movBtn[2].addEventListener('click',function(){
        event.preventDefault();
        for(var i = 0; i<movCont.length;i++){
            movCont[i].style.display ="none";
            movCont[2].style.display ="flex";
            movBtn[i].classList.remove('active');
        }
        this.classList.add('active');
        
        });

        movBtn[3].addEventListener('click',function(){
        event.preventDefault();
        for(var i = 0; i<movCont.length;i++){
            movCont[i].style.display ="none";
            movCont[3].style.display ="flex";
            movBtn[i].classList.remove('active');
        }
        this.classList.add('active');
        });

// 코드 다시 깔끔하게 정리하기