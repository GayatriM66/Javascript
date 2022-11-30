// sync ---- block in nature

// function addition(){
//     console.log('A')
// }
// function additonB(){
//     console.log('B')
// }
// additionB()
// addition()





// // async --non blocking in nature

// function additionC(){
//     setTimeout(function(){
//         console.log('C')
//     },2000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()







//// Multiple async

// user creation 
// getId
// // userInfo

// function GetInfo(){
//     setTimeout(function(){
//         console.log("User create")
//     },3000)

//     setTimeout(function(){
//         console.log("Get id")
//     },2000)

//     setTimeout(function(){
//         console.log("Get info")
//     },1000)
// }
// GetInfo()







// //call back hell
// function GetInfo() {
//     setTimeout(function () {
//         console.log("User create")
//         setTimeout(function () {
//             console.log("Get id")
//             setTimeout(function () {
//                 console.log("Get info")
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// GetInfo()







// // ////promises

// let prom1 = new Promise(function (reject,resolve) {
//     let a = 20
//     let b = 24
//     if (a == b) {
//         resolve("This is resolve block")
//     }
//     else {
//        reject("this is reject block")
//     }
// })



// prom1.then((str)=>{
//     console.log(str)
// }).catch((str)=>{
//     console.log(str)
//  })




// prom1
//     .then(function (str) {
//         console.log(str)
//         return ([2, 3, 4])
//     }).then(function (retrn) {
//         console.log(retrn)
//         return (retrn[2])
//     }).then(function (ele) {
//         console.log(ele)
//     }).catch(function(str){
//         console.log(str,"catch")
//     })
//     .finally(function(){
//         console.log("I am Finally Block!!! I will execute definately")
//     })




//call back hell
// function GetInfo() {
//     setTimeout(function () {
//         console.log("User create")
//         setTimeout(function () {
//             console.log("Get id")
//             setTimeout(function () {
//                 console.log("Get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// GetInfo()




function CreateUser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('User Create')
        }, 3000)
    })
}

function UserID() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("ID Created")
        }, 2000)
    })
}

function GetInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Get Info')
        },1000)
    })
}


// CreateUser()
// .then(function(str){
// console.log(str)
// return UserID()
// })
// .then(function(str){
//     console.log(str)
//     return GetInfo()
// })
// .then(function(str){
//     console.log(str)
// })



// //async await
async function getInformation123(){
    let a= await CreateUser()
    console.log(a)
    let b=await UserID()
    console.log(b)
    let c = await GetInfo()
    console.log(c)
    return c
}

//getInformation123()
let s = getInformation123()
s.then(function(str){
    console.log(str)
})

