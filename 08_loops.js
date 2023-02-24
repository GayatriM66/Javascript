// // for is a definite loop

// for(initialisation ; condition ; increment/decrement){
// } 

//  for(i=0;i<=10;i++){     
//     console.log(i)
// } 



// //its valid to declare j before for loop
//  let j=0
// for(;j<=10;){     
//     console.log(j)
//     j++
// } 




// //print 1 3 5 7 9

//  for (let i = 1; i < 10; i +=2) {
//    console.log(i)
// } 






// //print even and odd numbers
//  for (let i = 1; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log("The number is even", i)
//     }
//     else {
//         console.log("The number is odd", i)
//     }
// } 







// // //10 9 8 7 6 5
//  for (let i = 10; i >= 5; i--) {
//     console.log(i)
// }

// // //10 8 6 4 2
// for (let i = 10; i >= 1; i -=2) {
//     console.log(i)
// } 








// ///while(){}

//  initialisation   
// while(condition){
//     statements ;
//     increment/decrement;
// } 





// // //1 2 3 4 5 6 7 8 9 10

//  let i=0
// while(i<=10){
//     console.log(i)
//     i++
//  //   i += 1
//   //  i= i+1
// } 






// //reverse 10 9 8 7 6 5 4 3 2 1
//  let i =10
// while(i>=1){
//     console.log(i)
//    i--
// } 
// console.log(i)


// //increment and decrement operator --x,x--
// // --x will be decremented first and then gets evaluated.
// // whereas the x-- will be evaluated first and then gets decremented.
// // for example,
// let a =5, b =5;
// let c= --a;
// // here, c =4 and a=4 after evaluation.
// //why? Because variable a got decremented first
// // and then the expression evaluated.

// // //similarly,
// let d= --b; //4 4
// //let d= b--; //5 4
// console.log(d,b)
// //here, d=5 and b=4 after evaluation.
// //why?
// //Because the expression "d=b--" first get evaluated
// //and then the variable b is decremented. 









// //print even and odd using while loop

//  let i = 0
// while(i<=50){
//     if(i%2==0){
//     console.log('Its an even number ', i)
//     }
//     else
//     console.log('Its an odd number ', i)
//     i++
// } 









// // 10 8 6 4 2 

//  let i =10
// while(i>=0){
//     console.log(i)
//     i -=2
// } 











// //break and continue statement 
// //1 2 3 4 5      break at 2 
// for (let i = 0; i <= 5; i++) {
//     if (i == 2)
//         break
//     console.log(i)
// }


//1 2 3 4 5       1 2 4 5  //continue at 3
//3 will not be printed
 for(let i=0;i<=5;i++){
    if(i==3) continue
    console.log(i)
} 





//       0   1  2  3
let num=[11,22,33,44]

for (i=0;i<num.length;i++){
    console.log(num[i])
}                  //num[0]=11

console.log(16%5)
        //0  1......................arr.length 10
let arr=[11,22,33,44,55,66,77,88,99,100]

for(let i =0;i<arr.length;i++){
 if(arr[i]%2==0){
    console.log("even number",arr[i] )
 }
 else{
    console.log("odd number",arr[i] )

 }
}    

//while syntx
//initialisation
//while(condition){
    //statements 
    //increment/decrement


let j=0;

while(j<arr.length){
    if(arr[j]%2==0){
        console.log("even number",arr[j] )
     }
     else{
        console.log("odd number",arr[j] )
    
     }
    j++
}




//types of function in brief 

function add(){
console.log("hello")
}
add()

let add1 = function(){
    console.log("hello aaaa")
}
add1()

let add2 = () =>{
    console.log("arrow function")
}
add2()