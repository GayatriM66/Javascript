let user={
    name:'gayatri',
    age:32,
    city:'dhule',
    blogs:['first blog','second blog']
}

//retrieve by . notation
console.log(user.name)
console.log(user.age)
console.log(user.city)
console.log(user.blogs)

//retrieve by [] bracket notation
console.log(user['name'])
console.log(user['age'])
console.log(user['city'])
console.log(user['blogs'])


console.log('------------------------')

const key='city'
console.log(user.key)   //undefined
console.log(user[key])