let inputText=document.querySelector('input');
let buttonOne = document.querySelector('button');
let listAll = document.querySelector('ul');


buttonOne.addEventListener('click',function(){
    let inputvalue=inputText.value;
    let newLi=document.createElement('li');
    newLi.textContent=inputvalue;
    listAll.appendChild(newLi);
    inputText.value=" ";
    
})
