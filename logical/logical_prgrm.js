//logical programs


console.log(null==undefined)//true 


// //replace a with b and b with a
// let a = 10;
// let b = 20;

// [b, a] = [a, b];

// console.log(a, b)
// //--------------------------------------------


// let words = "how are you today !!!".split(' ');
// //console.log(words.join(' '))
// let [a, b, c, ...d] = words
// console.log(a, b, c, d);











// ------------------------------------

// create a new array with unique elements only

let arr=[11,22,33,44,11,22,66,77,88,22]
let arr2=[]
// let h= arr.filter(function(el,index){ 
//     return arr.indexOf(el)==index //el    22    index 5
//                 //  1== 4
// })                          //    //indexOf   
// console.log(h, "unique_elements")



// for(let i=0;i<arr.length;i++){
//     if(arr2.indexOf(arr[i])<0)  //0    -1
//     arr2.push(arr[i])
// }
// console.log(arr2)




//-----------------------------------------
// //same program using includes
// let arr3=[]
// for(i=0;i<arr.length;i++){
//     if(!arr3.includes(arr[i]))
//     arr3.push(arr[i])
// }
// console.log(arr3)

// //--------------------------------------------------------------------------



// let arr4=[11,-4,55,67,-45,-22,-4]

// //addition of positive value
// let arr5=arr4.filter(function(el){
//     return el>0
// }).reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(arr5)



// //addition of negative value
// let arr6=arr4.filter(function(el){
//     return el<0
// }).reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(arr6)






// let add1=(p=1,q=5,r=4)=>{
//     console.log(p+q+r, "this is p+q+r")
// }

// add1(1,1,5) //7

// add1(1,1,1) //3
// console.log(add1)//[Function: add1]
// add1()  //10

















