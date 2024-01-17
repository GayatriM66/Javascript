let button1=document.querySelector('button');
let h1color=document.querySelector('h1')
let inputtext1=document.querySelector('input')

/* 
button1.onclick(function(a,onclick){
    a.style.color='skyblue';
})
button1(h1color); */

button1.addEventListener('click',function(){
    let colorC=inputtext1.value;
    h1color.style.color=colorC;
    inputtext1.value="DONE!!!";
})

/* button1.addEventListener('mouseover',function(){
  //  inputtext1.value="DONE!!!";
  inputtext1.value="this is a mouseover!!!";
})
 */