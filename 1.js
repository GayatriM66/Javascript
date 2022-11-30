
function renderHtml(obj) {
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<img src = ${obj.avatar}>`)

}


function getUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })

}

function getUserById(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
}

// getUser(2)
// .then(function(res){
//     let id = res.data[0].id
//     return id
// })
// .then(function(id){
//    return  getUserById(id)
// })
// .then(function(res){
//     //console.log(res.data)
//     renderHtml(res.data)
// })



async function getInfo(pageNumber) {
    let res = await getUser(pageNumber)
    let id = res.data[0].id
    let user = await getUserById(id)
    renderHtml(user.data)
}
//getInfo(2)




getUser(1).then(function (res) {
    res.data.forEach(element => {
        renderHtml(element)
    });
})











// getUserById(7)
// .then(function(res){
//     console.log(res)
// })


// getUser(1).then(function(res){
//     console.log(res)
// })