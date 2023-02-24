let ages = [11, 22, 33, 44, 55, 6, 6, 7, 88]

function checkNumber(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}

let numAddSub = function (el) {
    return (el + 0.7777)
}


let oddnumber = checkNumber(ages, numAddSub)
console.log(oddnumber)