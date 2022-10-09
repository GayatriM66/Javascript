
// let add = function (x, y) {
//      console.log(x + y)
// }

// add(10, 20)
// console.log(typeof add)





// //get current ages of all members
// let birthyear=[2000,1990,1995,2001,1987,1980]
// let ages =[]

// for(let i=0; i<birthyear.length-1;i++){

//     ages.push(2022-birthyear[i])
// }
// console.log("current ages ",ages)


// //map
// //print every ages +2 in new array
// let ages2 =[]
// ages.map(function(el,index,arr){
//     ages2.push(el+2)
// })
// console.log("ages2 is = ",ages2)









// let number=[11,22,33,44]

// //ptint all numbers +10
// let num10=[]
// number.map(function(el){
//  num10.push(el+10)
// })
// console.log("num10 = ",num10)









// //print numbers greater than 30
// //let num30=[]
// let aa = number.filter(function(el,index,arr){
//     return  el > 30
// })
// console.log("num30 is =",aa)








 //reduce() takes 2 parameter 1st is function(), 2nd is accumulator initial value
// //print sum reduce ()
// /*
// let sum=0
// let bb=number.reduce(function(acc,el,index,arr){
// sum =sum +el
// })
// console.log("sum is = ", sum)
// */
// let bb=number.reduce(function(acc,el,index,arr){
//     console.log(acc)
//     return acc + el
// },0)         
// console.log("reduce output is =", bb)







// /////every() foreach() some() find() findindex()
// let num3=[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99]
// console.log(num3,"\n")

// let a= num3.every(function(el){
//     return el>5
// })

// let b=num3.some(function(el){
//     return b=el/2
// })

// console.log(a)
