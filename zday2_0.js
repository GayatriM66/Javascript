/*
why to use functions 
ways to define functions 
different types of functions

*/
// let x = 5
// let y = 10
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

// let a = 33
// let b = 44
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

// //DRY do not repeat yourself
// console.log("--------------------------")

// function calculator(x,y){
// console.log(x + y)
// console.log(x - y)
// console.log(x / y)
// console.log(x * y)
// console.log(x % y)
// }

// calculator(10,20)
// calculator(3,2)

// //function with parameter

// function add(x,y,z){
//     console.log(x+y+z)
// }
// add(12,13,14)






//setting default values via parameter
console.log("------------------------------")
function add1(x=1,y=2,z=3){
    console.log(x+y+z)
}
add1()
add1(10,20,30)
add1(3,4)   // z will b 3
add1(y=50,z=10)  //still it will assign 1st value to x then y i.e from left hand side
//******IMP********** */00

//////function expression 
////function expression are called as a first class function
// console.log("--------------function expression--------------------")
// let cal2=function(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
// }
// cal2(10,20)

// //arrow function 
// console.log("--------------arrow function--------------------")
// let cal3= (x,y)=>{
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
// }
// cal3(10,50)

// ////////////////////////////
// console.log("function without parameter without return type")
// function aadd(){
//     console.log(9+9)
// }
// aadd()

// let aaddd=function(){
//     console.log(9+9)
// }
// aaddd()

// let aadddd =()=>{
//     console.log(9+9)
// }
// aadddd()

// console.log("function with parameter without return type")
// function add5(x,y){
//     console.log(x+y)
// }
// add5(10,20)

// let add6=function(x,y){
//     console.log(x+y)
// }
// add6(10,20)

// let add7=(x,y)=>{
//     console.log(x+y)
// }
// add7(10,20)

// console.log("function with parameter with return type")
// function mul(x,y){
//     return x*y
// }
// let mulAns=mul(10,20)
// console.log(mulAns)

// let mul1=function(x,y){
//     return x*y
// }
// let mul1Ans=mul1(10,20)
// console.log(mul1Ans)


// //let x1=20
// let mul2=(x1,y1)=>{
//     console.log(x1)
//     return x*y
  
// }
// let mul2Ans=mul2(10,20)
// console.log(mul2Ans)
// //console.log(mul2Ans*2)


// //   arrow
// console.log("-------------Arrow function-------------------")
// /* let division=(x,y)=>{
//     //console.log(x/y)
//     return x/y
// }
// let divisionAns= division(10,20)
// console.log(divisionAns)
//  */
// let division=(x,y)=>x/y
// let divAns=division(10,2)
// console.log(divAns)





