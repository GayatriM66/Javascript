// type 
// boolean ----> true or false
// number  ----> 2,0,-4
// string  ----> collection of character
// type ---- properties and methods
//  values
// type (user defined data type) --- property and method 
// objects
//template -----> objects
//object literal 
//function constructor
//es6 class 
//Object create method
// template -- firstclass

// encapsulation 
// inheritance 
// polymorphism 
// abstraction

// program 1 (Object literal)
// Object ---- property - values 
// method() -----> property 
// action and return type

// ////1st way
// let sweety={
//     firstName:"gayatri",
//     lastName:"Mahale",
//     age: 32,
//     skills:["java","CPP", "JS", "Cypress"],
//     display:function(){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }

// let reena={
//     firstName:"reena",
//     lastName:"Rao",
//     age:22,
//     skills:["java","Selinium","Python"],
//     display:function(){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }



// //template----------->function constructor
// //program one
// //2nd way
// function Person(fn,ln,age,skills){
//     this.firstName=fn
//     this.lastName=ln
//     this.age=age
//     this.skills=skills
//     this.display= function(){
//         console.log(this.firstName+ " "+this.lastName)
//     }
// }

// let sweety= new Person("sweety","Mahale",32,["html","Css"])
// sweety.display()




// // program  2
// // vehicle  , color, type , modelNo 
// // start() , stop()
// //bwm , audi
// function vehicle(color,type,modelNo){
//     this.color = color;
//     this.type = type ;
//     this.modelNo = modelNo;
//     this.start = function(){
//         console.log('I am starting')
//     };
//     this.stop = function(){
//         console.log('I am stopped')
//     }
// }
// let audi = new vehicle('red',"sedane",123)
// let bmw = new vehicle('black',"SUV",456)







// //ES6 Class
// //unnamed class Expression
// //class name is anonymous
// let PersonS = class {
//     constructor() {

//     }
// }

// //named class Expression 
// //class name is student
// let PersonR = class Student {
//     constructor() {

//     }
// }



// let PersonC=class{
//     constructor(firstName,age,skills){
//         this.firstName=firstName
//         this.age=age
//         this.skills=skills
//         this.display=function(){
//             console.log(this.firstName)
//         }
//     }
// }
// let sweety1 = new PersonC("sweety",32,["html","css"])
// console.log(sweety1)






class vehicle {
    constructor(color, type, modelNo) {
        this.color = color
        this.modelNo = modelNo
        this.type = type
        this.start = function () {
            console.log("I am strating")
        }
        this.stop = function () {
            console.log("I am stopping")
        }
    }
}

// let Audi=new vehicle("black","sedane",123)
// console.log(Audi)


//create multiple objects by array
//problem is all onjects having a same objectname vehicleThree
let vehiclesThree = [new vehicle("red", "swift", 111),
new vehicle("black", "desire", 222),
new vehicle("red", "swift", 333),
new vehicle("red", "swift", 444)]

//console.log(vehiclesThree)

vehiclesThree.forEach(function (el) {
    for (let key in el) {
        console.log(key, el[key])
    }
})

//sloution
//create an object with different objectNames through object
let vehicleFour = {
    car1: new vehicle("silver", "Baleno", 555),
    car2: new vehicle("silver", "Baleno", 666),
    car3: new vehicle("silver", "Baleno", 777),
    car4: new vehicle("silver", "Baleno", 888)
 }

for(let values of Object.values(vehicleFour)){
    for(let key in values){
        console.log(key,values[key])
    }
}




// Object create
// -------------------------------------
// firstName lastName rollNo skills
// sweety   mahale       34   html , css
// ----------------------------------
// console.log(sweety)



















