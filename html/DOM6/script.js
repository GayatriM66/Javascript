let buttonOne= document.querySelector('button');
let listAll=document.querySelectorAll('li');

console.log(listAll);
buttonOne.addEventListener('click',function(){
    for(let i=0;i <= listAll.length; i++){
    if(i%2==0){
        listAll[i].style.color='red';
    }
    else{
            listAll[i].style.color='yellow';
    }
}
})


//console.log("this is button one", buttonOne);
//console.log(buttonOne.textContent);