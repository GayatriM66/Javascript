let buttonOne= document.querySelector('#mainButton')
let text1= document.querySelector('input')
let newLi= document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let textOne= text1.value
    let li= document.createElement('li')
    li.textContent=textOne
    createButton(li)
    newLi.appendChild(li)
})


function createButton(li){
let remove=document.createElement('button')
remove.classList="remove"
remove.textContent="Remove"
li.appendChild(remove)

let up=document.createElement('button')
up.classList="up"
up.textContent="Up"
li.appendChild(up)

let down=document.createElement('button')
down.classList="down"
down.textContent="Down"
li.appendChild(down)

}

newLi.addEventListener('click',function(event){
    if(event.target.tagName=="BUTTON"){
        if(event.target.classList=="remove"){
            let li=event.target.parentElement
            ul=li.parentElement
            ul.removeChild(li)

        }
        if(event.target.classList=="up"){
            
        }
        if(event.target.classList=="down"){
            
        }
    }
})


