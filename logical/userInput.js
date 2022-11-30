//take input from the user ,
// accept only if it contains 8 to 18 characters


//The do...while statements combo defines a code block to be executed once,
// and repeated as long as a condition is true.

// //The do...while is used when you want to run a code block at least one time.
// let string
// let flag=true
// do{
//     string = prompt("Enter the string 8 to 18 characters only")
//     if(string.length>=7 && string.length <=18){
//         flag=false
//     }
// }while(flag)
// console.log(string)
// console.log(flag)



//while loop runs when condition is true
//when condition becomes false , it will not enter into the while loop


// let num=0;
// do{
//     console.log(num)
//     num++
//     console.log((num<15))
// }while(num<15); //if condition false it will come out of the loop




var obj = {
    a: "hello world",
    b: "new word"
};

var b = "a";
var c = "a"

console.log(obj[b]);		// hello world
console.log(obj["b"])		// 42
console.log(obj[c])         //  hello world

console.log(obj)        //c is not a part of obj
