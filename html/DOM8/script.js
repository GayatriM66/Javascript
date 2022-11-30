//adding a new fruit to the existing list
//creae 3 new button , up, down, remove


let mainButton=document.querySelector('.MainButton');
let inputtext=document.querySelector('input');
let listAll=document.querySelector('ul');

console.log(mainButton);
console.log(inputtext);

////add element to listt

mainButton.addEventListener('click',function(){
    let newfruit=inputtext.value;
    let newLi=document.createElement('li');
    newLi.textContent=newfruit;
    listAll.appendChild(newLi);
    addButton(newLi);
    inputtext.value=' ';
})

function addButton(newLi)
{
let btnUp=document.createElement('button');
btnUp.textContent="up";
newLi.append(btnUp);

let btnDown=document.createElement('button');
btnDown.textContent="Down";
newLi.append(btnDown);

let btnRemove=document.createElement('button');
btnRemove.textContent="Remove";
newLi.append(btnRemove);
}
console.log(listAll);