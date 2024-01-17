let mainButton=document.querySelector('button')
let inputText=document.querySelector('input')
let ulList=document.querySelector('ul')


mainButton.addEventListener('click',function(){
    let newli=document.createElement('li')
    let newtext=inputText.value
    newli.textContent=newtext
    ulList.appendChild(newli)
})