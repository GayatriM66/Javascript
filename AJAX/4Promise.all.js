// // //program 1
// function userInfo(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(res){
//         return res.json()
//     })
// }


// userInfo(1)
// .then(function(res){
//     console.log(res)
//     renderHtml(res.data)
// })


// function renderHtml(res){
//     document.write(`<h1>${res.first_name}</h1>`)
// }




// ////2
// function userInfo(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(res){
//         return res.json()
//     })
// }


// function renderHtml(obj){
//     document.write(`<h1>${obj.first_name}</h1>`)
//     document.write(`<h1>${obj.last_name}</h1>`)
//     document.write(`<h1>${obj.email}</h1>`)
//     document.write(`<h1>${obj.id}</h1>`)
//     document.write(`<img src=${obj.avatar}>`)
// }

// userInfo(3)
// .then(function(res){
//     console.log(res)
//     renderHtml(res.data)
// })










// //////////////3



// function  userInfo(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(res){
//         return res.json()
//     })
// }

// function renderHtml(obj){
//     document.write(`<h1>${obj.first_name}</h1>`)
//     document.write(`<h1>${obj.last_name}</h1>`)
//     document.write(`<h1>${obj.email}</h1>`)
//     document.write(`<h1>${obj.id}</h1>`)
//     document.write(`<img src=${obj.avatar}>`)
// }

// async function UserssInfo(id1,id2,id3){
//     let userData= await Promise.all([
//         userInfo(id1),
//         userInfo(id2),
//         userInfo(id3)
//     ])
//     console.log(userData)
//     userData.forEach(function(el){
//         renderHtml(el.data)
//     })
// }

// UserssInfo(1,2,3)



/////////////4


// async function Info(){
//     let a = await Promise.all([
//         Promise.resolve('hello'),
//         Promise.resolve('hi'),
//         Promise.reject('Byee..')
//     ])
//     console.log(a)
// }
// Info()









// // /////////////5

// async function Info(){
//     let a=await Promise.race([
        
//         // Promise.resolve('hello solved'),
//         // Promise.reject('hello rejected')

//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve('hello resolved')
//             },3000)
//         }),

//         new Promise(function(reject){
//             setTimeout(function(){
//                 reject('hello rejected')
//             })
//         },2000)
        
//     ])
//     console.log(a)
// }
// Info()

// // Promise.allSettled()


// // Promise.any()