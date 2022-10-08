// //closure 
// function addition(x, y) {
//     return function () {
//         console.log(x + y)
//         return x * y;
//     }
// }
// let ans = addition(10, 20)

// //ans = return function () {
// //  console.log(x + y)
// //return x+y;
// //}
// console.log(ans, "this is a anonymous function")
// let aa = ans();   //now it actually calls the return function n executes prints x+y=30 and "return x*y" is executed here
// console.log(aa, "is the value of x*y")


// ////////return functionn means in clousure that the function with its lexical scope 
// //bundeled together forms a closure is  returned













function addition3(x, y) {

    return function () {
        console.log(x + y, "inside function")
        return x + y
    }
}
let r = addition3(12, 13)
// let r = function(){
//     console.log(x+y, "inside function")
//   return x +y 
//
 // }
let x = 10   //even if we update the value of x 
            //it will remember value of x as 12 only,
            //this is closures
console.log(r)
let jj = r()
console.log(jj)


