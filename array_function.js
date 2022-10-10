let ages = [11, 22, 33, 44, 11, 22, 33, 44]

function printArr(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
//calling function for each n every element n executing the function
    }
    return newArray
}

let count = 0
let above18 = function (el) {
    console.log(count++)
    return el > 18
}

let addTwo = function (el) {
    return el + 2
}

let mulBy3 = function (el) {
    return el * 3
}

let dg = printArr(ages, above18)
let sp = printArr(ages, addTwo)
let rp = printArr(ages, mulBy3)

console.log(dg)
console.log(sp)
console.log(rp)
