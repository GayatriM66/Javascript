

// // ---> 


// //<p id = "one" class = "two" name="nm">para</p>


// //tagName   (css selector)

// document.querySelector('p')
// //  id 
// document.querySelector('#one')
// //  class
// document.querySelector('.two')
// // common 
// document.querySelector('p[name = "nm"]')


// //<p id = "one" class = "two" name="nm">para</p>
// document.getElementsByTagName('p')

// document.getElementsByName('nm')

// document.getElementsByClassName('two')

// document.getElementById('one')

// /*----------------------------------------------*/


// HTML collection and Node list




let liList = document.querySelectorAll('li') // nodeList
console.log(liList)

let list = document.getElementsByTagName('li') // HTML collection
console.log(list)




