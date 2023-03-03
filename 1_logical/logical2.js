// //find the lenghtiest word


// let names=["gayatri", "sweety","rahul", "ram", "devashree"]

// let longest= names.reduce(function(acc,el){
//    // console.log(acc, el)
//     if(acc.length>el.length){
//         // 7   >   9  
//         return acc
//     }
//     else{
//         return el
//     }
// }," ")
// console.log(longest, " and its length is ", longest.length)


// //find MAX and MIN number
// let num=[11,34534,55,7,4,34,2,03]
// let max=0
// let min=0
// max = num.reduce(function(acc,el){
//  if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }
// })
// console.log(max, "is a maximum number")



// min = num.reduce(function(acc,el){
//     if(el<acc){
//         return el
//     }
//     else{
//         return acc
//     }
// })
// console.log(min, "is a minimum number")









///passsing number as parameter to another function
function addition(x,y,z){
    return x+y+z
}
let add=addition(11,44,55)
console.log(add)
//addition(12,12)



// //parameter but no argument
// function addition1(x,y){
//     console.log(x)
//     console.log(y)
//     console.log(x+y)
// }
// addition1()   //undefined x , y
// //-----------------------------------------------
// ////using passed arguments
// function addition2(x=10,y=20){
//     console.log(x+y)
// }
// addition2(7,7)//it will take this values

// //---------------------------------------


// ////using passed arguments
// function addition3(x=10,y=20){///this default values will be used****
//     console.log(x+y)
// }
// addition3()






// //passing string parameter to a function
// let city="chandrapur"
// function greet(a){
//     console.log(a, "is a city")
// }
// greet(city)







// //array as parameter to another function
// let num6=[11,22,33,44,55,66]
//  function arrayPrint(arr){
//    let sum= arr.reduce(function(acc,el){
//         return acc+el
//     },0)
//     console.log(sum)
// }
//  arrayPrint(num6)







//  //array as parameter to another function
// let num7=[11,22,33,44,55,66]
// function printArray([a,b,e]){       //11 22 33 is 66
//     console.log(a+b+e)
// }
// printArray(num7)





// //object as a parameter to another function
// let person = {
//     fullName:"Gayatri",
//     age : 31
// }
// function printObject(obj){
//     for(let key in obj){
//         if(key== "age"){
//             console.log(key,obj[key])
//         }
//     }
// }
// printObject(person)






// let student2={
//     firstName:"Gayatri",
//     lastName : "Mahale"
// }
// function printName({firstName:fn,lastName:ln}){ //obj destructure
//     console.log(fn,ln)
// }
// printName(student2)










