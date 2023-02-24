const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50,
    eyeColor:"blue"
    };



//console.log(person)

//print keys
// console.log(Object.keys(person))

//print values
//console.log(Object.values(person))


// //key value
// console.log(Object.entries(person))

// //freeze
//console.log(Object.freeze(person))
// person.firstName="gayatri"
// console.log(person)

// //ONLY UPDATE VALUES , CAN NOT ADD NEW PROPERTIES
// Object.seal(person)
// person.firstName="gayatri"
// console.log(person)
// person.city="avb"       //cant not add new property
// console.log(person)



// //gets all string keys of all own properties
// console.log(Object.getOwnPropertyNames(person))4