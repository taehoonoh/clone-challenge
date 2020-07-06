const t1 = document.getElementById("number")
const button1 = document.getElementById("bt1")
const button2 = document.getElementById("bt2")
// const baam = document.getElementById("money")


button1.onclick = () =>{
    const change = parseInt(t1.innerText,10) ;

    t1.innerText = change + 1;
    
    // money.innerText = t1 * 9000;
    // console.log('클릭완료정상작동');
    
}

button2.onclick = () =>{
    const change = parseInt(t1.innerText,10);

    t1.innerText = change - 1;

    // money.innerText = baam -(9000);
    // console.log('클릭완료정상작동');
    
}