let heading3= document.querySelector('h3')
let heading2= document.querySelector('h2')
let mainButton = document.querySelector('button')

heading3.addEventListener('mouseover',function(){

    heading3.style.color='green';
})

mainButton.addEventListener('click', function(){
    heading2.style.color='purple'
})

console.log("hello")