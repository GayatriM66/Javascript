//alert('hello')

// selecting the element 

let buttonA = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = text  // <li>Chiku</li>
    //ulList.appendChild(newElement)
    //ulList.prepend(newElement)

    //CreateButton(newElement)
    CreateButton(newElement,"remove")
    CreateButton(newElement,"up")
    CreateButton(newElement,"down")

    ulList.append(newElement)
    // difference between appenchild and append

})




function CreateButton(li,name){
    let buttonElement =  document.createElement('button') // <button></button>
    buttonElement.textContent = name // <button>remove</button>
    buttonElement.classList = name // <button class = "remove">remove</button>
    li.append(buttonElement)
 }
















// aakash>>??
// function CreateButton(li){

//    let remove =  document.createElement('button') // <button></button>
//    remove.textContent = "remove" // <button>remove</button>
//    remove.classList = "remove" // <button class = "remove">remove</button>
//    li.append(remove)
   
//    let down =  document.createElement('button') // <button></button>
//    down.textContent = "down"
//    down.classList = "down"
//    li.append(down)
   
//    let up =  document.createElement('button') // <button></button>
//    up.textContent = "up"
//    up.classList = "up"
//    li.append(up)
   
// }


