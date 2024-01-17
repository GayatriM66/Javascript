let listli= document.querySelectorAll('li')
let mainButton = document.querySelector('button')

mainButton.addEventListener('click',function(){
    for(let i=0;i<listli.length;i++){
        if(i%2==0){
            listli[i].style.color="red";
        }
        else{
            listli[i].style.color="green"
        }
    }
})