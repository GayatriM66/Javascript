let newUl = document.querySelector('ul')
let mainButton= document.querySelector('button')
let inputText = document.querySelector('input')
let headingOne = document.querySelector('h1')


/* mainButton.addEventListener('click',function(){

    for(let i=0; i< newLi.length ; i++)
    {
        if(i%2==0){
            newLi[i].style.color= "green"
        }
        else {
            newLi[i].style.color= "red"
        }
    }
}) */

/* mainButton.addEventListener('click',function(){
    let color = inputText.value
    headingOne.style.color=color;
    inputText.value=" "
}) */

mainButton.addEventListener('click',function(){
    let newFruit= document.createElement('li')
    newFruit.textContent= inputText.value
    newUl.appendChild(newFruit)
})