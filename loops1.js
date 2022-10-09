
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