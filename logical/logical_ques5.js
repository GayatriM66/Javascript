// let a="Sachin"
// let b="Tendulkar"
// b=[a,b]
// a=b[1]
// b=b[0]
// console.log(a)
// console.log(b)

//-----2nd way ---------------------------

// var a = "world", b = "hello";
// b = [a, a = b][0]; //it will assign n [0] value to b

// console.log(a, b); // Hello world



//its working ...........
// var a = "Hello", b = "World!";  this ; is very imp here
// [a, b] = [b, a]; //
// console.log(a, b); // World! Hello







// var a = "Sachin"
// var b ="Tendulkar";  //this ; is very imp
// [a, b] = [b, a];
// console.log(a,b)







// //print any alphabet from the javascript word randomly

// let str="javascript"
// let ss=str[Math.floor(Math.random() * str.length)]
// console.log(ss)


// //count dulplicte elements from array
// let arr=[11,55,22,33,11,22,55,11,22,55,11,22,55,66,99,88,2]
// let countNum={}
// for(let i=0;i<arr.length;i++){
//     if(!countNum[arr[i]]){
//         countNum[arr[i]]=1
//     }
//     else{
//         countNum[arr[i]]=countNum[arr[i]]+1
//     }
// }
// console.log(countNum)



// Remove duplicates of an array and return an array of only unique elements

// // ES6 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// //console.log(Array.from(new Set(array))); // [1, 2, 3, 5, 9, 8]
// //console.log(array) //previous array no change
// console.log(new Set(array))//returns the object of unique elements




//works
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
var newArr=[]
array.forEach((el)=>{
//    if(!newArr.includes(el)){     //works  or
//     newArr.push(el)
//    }
    if(newArr.indexOf(el)===-1){    //works
        newArr.push(el)
    }
})
console.log(newArr)


