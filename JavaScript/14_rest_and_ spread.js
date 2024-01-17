
//spread and rest


//rest

function addition1(...t){
    let sum1= t.reduce(function(acc,el){
        return acc + el
    },0)
    return sum1
}
let sum11 = addition1(10,20,30)/////please note these are function parameters not array
console.log(sum11)


//rest function

function add(...arr){
    let sum= arr.reduce(function(acc,el){
       return acc+el
    },0)
    return sum
}

let total=add(12,44,5,7,8,97,54,43,57,987,3)
console.log(total)