//OOPS
//Encapsulasion
//Polymorphism
//Inheritance
//Abstraction

// //1. Object Literal

// let amol = {
//     fullName: "Amol Rao",
//     age: 45,
//     adharNumber: 36453277681,
//     display: function () {
//         console.log(this.fullName)
//     }
// }
// console.log(amol)
// console.log(amol.display())





// //2. class constructor
// class Person {
//     constructor(fn, ag, rn, state) {
//         this.fullName = fn
//         this.age = ag
//         this.rollNumber = rn
//         this.state = state
//     }
//     display() {
//         console.log(this.fullName)
//     }
// }
// let gayatri = new Person('Gayatri', 23, 345, "Maharashtra")
// console.log(gayatri)
// gayatri.display()




// //function constructor
// let Person2 = function (fn, ag, rn, st) {
//     this.fullName = fn
//     this.age = ag
//     this.rollNumber = rn
//     this.state = st
//     this.display = function () {
//         console.log(this.fullName)
//     }
// }

// let sweety = new Person2('Sweety', 12, 2343, "Maharashtra")
// let swati = new Person2('Swati', 23, 43, "Goa")
// sweety.display()
// console.log(sweety)

// swati.display()
// console.log(swati)








////prototype

//every object in javascript has __proto__

// console.log(sweety.__proto__ === Person2.prototype)
// //true
// //********************************************************* */



