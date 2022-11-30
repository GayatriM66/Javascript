let mainButton = document.querySelector('.mainbutton')
let inputText = document.querySelector('input')
let newul = document.querySelector('ul')

mainButton.addEventListener('click', function () {
    let textValue = inputText.value
    let newLI = document.createElement('li')
    newLI.textContent = textValue
    newul.appendChild(newLI)
    uploadElement(newul)

})

function uploadElement(newul) {
    let b1 = document.createElement('button')
    b1.textContent = "up"
    newul.appendChild(b1)

    let b2 = document.createElement('button')
    b2.textContent = "down"
    newul.appendChild(b2)

    let b3 = document.createElement('button')
    b3.textContent = "remove"
    newul.appendChild(b3)

}