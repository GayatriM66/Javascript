//api-hit----list of Users
//single-User id
//next api----is---userinfo

function getUserPageWise(page){
   return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        return res.json()
    })
    // .then(function(res){
    //     // console.log(res)
    //     return res
    // })
}

function getUserIDWise(id){
   return fetch(`https://reqres.in/api/users/${id}`)
   .then(function(res){
    return res.json()
    })
//    .then(function(res){
//     return res
//    })
}

getUserPageWise(2)
.then(function(res){
    return res.data[0]['id']
})
.then(function(i){  
    return getUserIDWise(i)
})
.then(function(res){
    console.log(res.data)
})

// //or

// getUserPageWise(2)
// .then(function(res){
//    getUserIDWise res.data[0]['id']
// })
// .then(function(res){
//     console.log(res.data)
// })

