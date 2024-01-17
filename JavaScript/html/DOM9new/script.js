llet mainButton = document.querySelector('#mainbutton')  ////pending up and down
let text = document.querySelector('input')
let ulList = document.querySelector('ul')

mainButton.addEventListener('click', function () {

    let newLi = document.createElement('li')
    newLi.textContent = text.value
    ulList.appendChild(newLi)
    createButtons(newLi)
    text.value = ' '

})

function createButtons(newLi) {

    let up = document.createElement('button')
    up.textContent = "up"
    up.classList = "up"
    newLi.append(up)

    let down = document.createElement('button')
    down.textContent = "down"
    down.classList = "down"
    newLi.append(down)

    let remove = document.createElement('button')
    remove.textContent = "remove"
    remove.classList = "remove"
    newLi.append(remove)
}

ulList.addEventListener('click', function (event) { 
    if (event.target.tagName == "BUTTON") {
        if (event.target.classList == "remove") {
           let li=event.target.parentElement
           let ul=li.parentElement
           ul.removeChild(li)
       
        }
    }

    if (event.target.tagName == "BUTTON") {   ///////////////pending upand down
        if (event.target.classList == "up") {
           let li=event.target.parentElement
            ul=
        }
    }
})