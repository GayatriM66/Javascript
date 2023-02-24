// let english = "I am learning Javascript"
// let newEnglish=english.split(" ")   //value in " " will be skipped

// let newEnglish1=english.split("am")

// console.log(english," is a english string original")
// console.log(newEnglish,newEnglish1)
// console.log(newEnglish.length)



// //longest word
// let longestWord= newEnglish.reduce(function(acc,el){
//     if(acc.length<el.length){
//         acc=el
//     }
//     return acc
// },"")
// console.log(longestWord)








// function addition(x,y){
//     return [true,x+y]
    
// }
// let aa = addition(12,13)
// console.log(aa)







// //object as a parameter to another function
// let person={
//     firstName: "Gayatri",
//     age:31
// }
// function printObject(obj){
//     for (let key in obj){
//         console.log(key,obj[key])
//     }
// }
// printObject(person)


// function printObject1({firstName:ffn}){
//     console.log(ffn)
// }
// printObject1(person)









// let person1={
//     firstName: "Amol",
//     age :31
// }

// function printObject(obj){
//     obj.firstName="Ram"
// }
// printObject(person1)
// console.log(person1)//Ram







// let add=function(x=10,y=2){
//     console.log(x+y)
// }
// function addition(fn1){

//      fn1= function(a,b,c){
//         console.log(a+b+c)
//     }
//     fn1(11,22,33)
// }
// addition(add)
// add(11,22,33)




