let mainButton1 = document.querySelector('#mainButton')
let text1=document.querySelector('input')
let newLi=document.querySelector('ul')

mainButton1.addEventListener('click', function(){
    let li1=text1.value
    let li= document.createElement('li')
    li.textContent=li1
    newLi.appendChild('li') //kiwi
    // createButton1('newLi')
    //text1.textContent=" "

})