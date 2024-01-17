let button1 = document.querySelector('#mainbutton');
let inputtext = document.querySelector('input');
let ulList = document.querySelector('ul')

////add new item to the existing list
button1.addEventListener('click', function () {
    let text1 = inputtext.value;
    let newLi = document.createElement('li');
    newLi.textContent = text1;
    ulList.appendChild(newLi);
    createButton(newLi);
    inputtext.value = ' ';
})
////create button remove, up and down 
function createButton(newLi) {
    let Remove = document.createElement('button');
    Remove.textContent = "Remove";
    Remove.classList="remove"
    newLi.appendChild(Remove);

    let Up = document.createElement('button');
    Up.textContent = "Up";
    Up.classList="up"
    newLi.appendChild(Up);

    let Down = document.createElement('button');
    Down.textContent = "Down";
    Down.classList="down"
    newLi.appendChild(Down);

}

ulList.addEventListener('click', function (event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.classList == "remove") {
            let li = event.target.parentElement;
            let ul = li.parentElement;
            ul.removeChild(li)
        }
    }

    if (event.target.classList == "up") {
        let li = event.target.parentElement;
        let prevLi = li.previousElementSibling;
        console.log(prevLi,"this is previous element sibling")
        let ul=prevLi.parentElement
        if(prevLi){
        ul.insertBefore(li,prevLi)
        }
    }

    if(event.target.classList=="down"){
        let li = event.target.parentElement;
        let nextLi=li.nextElementSibling;
        let ul=nextLi.parentElement;
        if(nextLi){
            ul.insertBefore(nextLi,li)
        }
    }
})