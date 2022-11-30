//rest

/* function add(...arr){
  let sum=  arr.reduce(function(acc,el){
        return acc+el
    },0)
    return sum
}


let total = add(12,13,14,33,44,55,66,77,88,99,00)
console.log(total)
 */

//spread


/* function add(a,b,c,d){
    console.log(a+b+c+d)
}
num=[10,20,30,40]
let total=add(...num)
 */

//function which will sort the elements greater than first element of the array
/* function sort(first,...arr){                ////spread
    let sorted= arr.filter(function(el){
              return  el>first
    })
    return sorted
}

let ages=[18,34,55,23,12,4,21,4,17,20,44,10,22,31,44,55,11]
let sortedarray=sort(...ages)///rest
console.log(sortedarray)

let ages1=[30,34,55,23,12,4,21,4,17,20,44,10,22,31,44,55,11]
let sortedarray1=sort(...ages1)///rest
console.log(sortedarray1)

 */



// 11,22,33 ----> [11,22,33]--- // rest
// [11,22,33]---> 11,23,44 --- // spread

//----------------------------------->


let ages1 = [11, 22, 33, 09, 12, 65]

function checkNumbers(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }
    return newArray
}
let fnabove18 = function (el) {
    return el > 18
}

let add2 = function (el) {
    return el + 2
}

let mulBy3 = function(el) {
    return el * 3
}

let abovee18 = checkNumbers(ages1, fnabove18)
let multiBy3 = checkNumbers(ages1, mulBy3)
let addTwo = checkNumbers(ages1, add2)

console.log(abovee18)
console.log(multiBy3)
console.log(addTwo)