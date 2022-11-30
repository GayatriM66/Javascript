// Promises --- asyn code manage
// async(parallel execution) --- sync 

// Promise ----
// pending  resolve reject






// function addA(){
//     console.log('A')
// }

// function addB(){
//     console.log('B')
// }

// addB()
// addA()





//setTimeout()
//The setTimeout() method calls a function after a number of milliseconds.
// The setTimeout() is executed only once.
// If you need repeated executions, use setInterval() instead.
// Use the clearTimeout() method to prevent the function from starting.
// To clear a timeout, use the id returned from setTimeout():

// myTimeout = setTimeout(function, milliseconds);
// Then you can to stop the execution by calling clearTimeout():
// clearTimeout(myTimeout);


//eg
// let timeOut=setTimeout(function(){
// },2000)
//  console.log(timeOut)



//  //eg
//  let timeOut=setTimeout(alert,1000)
//  function alert(){
//     console.log('Message-Alert')
//  }




//clearTimeout eg
//   clearTimeout(timeOut)
// The clearTimeout() method clears a timer set with the setTimeout() method.
// To clear a timeout, use the id returned from setTimeout():

// myTimeout = setTimeout(function, milliseconds);
// Then you can to stop the execution by calling clearTimeout():

// clearTimeout(myTimeout);






// //SetTimeout is async in nature----so non blocking nature 
// //program 2 

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
// //func addC even if called first, it will be executed after 2 seconds because of setTimeout






//program 3 
//we need a output in sequence
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







// //async -----sync 

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

//Now we are achieveing the result what we want,
// but its creating a call back hell.
// triangle shape





// //promises
//promise is a constructor
// let pro = new Promise(function (resolve1,reject123) {
//     let a = 10
//     let b = 1
//     if (a == b) {
//         resolve1("Both are equal   !")
//     }
//     else {
//         reject123("Both are not equal   !")
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
//     console.log(b[2])
//  })
// //  .finally(function(){
// //     console.log("Promise resolve or Reject I will definately run")
// // })





//with catch block

let pro2=new Promise(function(resolve,reject){
    let no1=10;
    let no2=30;
    if(no1==no2){
        resolve([5,6,7])
    }
    else{
        reject([8,9,10])
    }
})
pro2.then(function(a){      //resolve
    console.log(a[1])
}).catch(function(b){       //reject we aree chaining a catch method here, looks more clean
    console.log(b[1])
}).finally(function(){
    console.log("I will definately run")
})
