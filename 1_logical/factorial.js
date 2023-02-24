let obj = {
    a: 4,
    b:5,
    c:6
}
// for (let key in obj) {
//     obj[key] = factorial(obj[key])
// }
// console.log(obj)

// function factorial(objKey) {
//     let fact =1
//     for (i = 1; i <= objKey; i++) {
//         fact=fact * i
//     }
//     return fact
// }

for(let key in obj){
   // console.log(key, obj[key])
    obj[key]=factorial(obj[key])
}
console.log(obj)

function factorial(num){
    let fact=1
    for(i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}