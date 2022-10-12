// Promises --- asyn code manage
// async --- sync 
// async --- parallel execution


// Promise ---- 10 info
// pending 
// resolve
// reject


// function addA(){
//     console.log('A')
// }

// function addB(){
//     console.log('B')
// }

// addB()
// addA()






// //SetTimeout is async in nature----so non blocking nature 
// //program 2 
// //Async
// function addC() {
//     setTimeout(function () {
//         console.log('C')
//     }, 2000)
// }

// function addD() {
//     console.log('D')
// }

// addC()
// addD()
//func addC even if called first, it will be executed after 2 seconds because of setTimeout






//program 3 
//weneed a output in sequence
//1. userCreate(API)---getId(API)----userInfo(API)

// //async------>sync
// function getUserInfo() {
//     setTimeout(() => {
//         console.log('user Created')
//     }, 3000);
//     setTimeout(() => {
//         console.log('get ID')
//     }, 2000)
//     setTimeout(() => {
//         console.log('user info')
//     }, 1000)
// }
// getUserInfo()







//async -----sync 

// //call back hell
// function getUserInfo() {
//     setTimeout(() => {
//         console.log('User Created')
//         setTimeout(() => {
//             console.log('get ID')
//             setTimeout(() => {
//                 console.log('user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }

// getUserInfo()

// //Now we are achieveing the result what we want,
// but its creating a call back hell.
//triangle shape





// //promises
// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 1
//     if (a == b) {
//         resolve("Both are equal   !")
//     }
//     else {
//         reject("Both are not equal   !")
//     }
// })

// //consuming the promise

// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })



// let pro2=new Promise(function(resolve,reject){
//     let num1=1;
//     let num2=10;
//     if(num1==num2){
//         resolve([12,13,14])
//     }
//     else{
//         reject([-12,-13,-14])
//     }
// })
//  pro2.then(function(a){
//     console.log(a[1])
//  },function(b){
//     console.log(b[1])
//  })
// //  .finally(function(){
// //     console.log("Promise resolve or Reject I will definately run")
// // })






// //with catch block

// let pro2=new Promise(function(resolve,reject){
//     let no1=10;
//     let no2=10;
//     if(no1==no2){
//         resolve([5,6,7])
//     }
//     else{
//         reject([8,9,10])
//     }    
// })
// pro2.then(function(a){
//     console.log(a[1])
// }).catch(function(b){
//     console.log(b[1])
// }).finally(function(){
//     console.log("Promise resolve or Reject I will definately run")
// })
