function renderHtml(obj){
    document.write(`<img src=${obj.avatar}>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
}


function getUser(pageNo){
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(res){
        return res.json()
    })
}


function getID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
}


//***
//// dispaly a 1st user of page number 2
// getUser(2)
// .then(function(res){
//    return getID(res.data[0].id)
// }).then(function(res){
//     //console.log(res.data)
//     renderHtml(res.data)
// })


// //***
// //display all user of page number 2
// getUser(2)
// .then(function(res){
//     res.data.forEach(ele=>{
//         renderHtml(ele)
//     })
   
// })

async function getInfo(pageNo){
    let res = await getUser(pageNo)
    let id= res.data[0].id
    let user=await getID(id)
    renderHtml(user.data)
}

getInfo(2)