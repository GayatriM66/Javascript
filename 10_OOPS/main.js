//closure=> Nested functions have access to variables declared in their outer scope.
// /In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript,
// closures are created every time a function is created, at function creation time.
// function add(){
//     let x=5
//     console.log(x)
//     function add2(){
//         let y=6
//         console.log(x+y)
//         function add3(){
//             let z=9
//             console.log(x+y+z)
//         }add3()
//     }add2()
// }add()


//callback => A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
// function greet(nmae,callback){
//     console.log(nmae);
//     callback()
// }
// function callme(){
//     console.log('i am a callback function')
// }
// greet('gayatri',callme)


//rest=> The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// /Only the last parameter in a function definition can be a rest parameter.
//correct => foo(arg1, arg2, ...correct)
// function add(...array) {
//     let a = array.reduce(function(acc, el){
//         return acc+el
// })
// console.log(a)
// }
// add(5,6,8,95,4,4,5,4,5,5)


//spread 
//spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, 
//while rest syntax collects multiple elements and "condenses" them into a single element.
// let array=[5,6,8,9,1,3,6,7,8]

// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...array)

// inheritance => To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class
// class Grandfather {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// class Father extends Grandfather {
//     constructor(name, age, hobby) {
//         super(name, age)
//         this.hobby = hobby
//     }
// }
// class Son extends Father {
//     constructor(name, age, hobby, surname) {
//         super(name, age, hobby)
//         this.surname = surname
//     }
//     display(){
//         console.log('hi')
//     }
// }
// let a=new Son('gayatri',32,'reading','mahale')
// console.log(a)
// a.display()

//?
//encapsulation->encapsulation refers to the bundling of data with the methods that operate on that data, 
//or the restricting of direct access to some of an object's components
//In OOP, that means that an object stores its state privately,
// and only the object’s methods have access to change it.
// class Device{
//     constructor(model){
//         this.model=model
//     }
// }
// class Phone extends Device{
//     #pincode
//     constructor(model,pincode){
//         super(model)
//         this.#pincode=pincode
//     }
//     display(){
//         console.log(`unlock this device using ${this.#pincode}`)
//     }
// }


// // let a=new Phone('iphone',412303)
// // a.display()
// //console.log(a.#pincode)

// //over-riding

// // class Axis{
// //     draw(){
// //         console.log('ir is 10%')
// //     }
// // }
// // class SBI{
// //     draw(){
// //         console.log('ir is 11%')
// //     }
// // }
// // class PNB{
// //     draw(){
// //         console.log('ir is 12%')
// //     }
// // }
// // let a= new PNB()
// // a.draw()

//object

// let Person={
//     name:'mahesh',
//     surnmae:'tekawade',
//     age:27
// }
// console.log(Person.name)
// Person.name='kiran'
// console.log(Person.name)
// Person.lang='hindi'
// delete Person.age
// console.log(Person)

//prototype

// function greet(name, age) {
//     this.name = 'mahesh'
//     this.age = 27
// }
// greet.prototype.lang = 'hindi'
// let a = new greet()
// //console.log(a.lang)
// //a.lang='hindi'
// console.log(a)
// let b = new greet()
// console.log(b.lang)

//static=>Static methods are called directly on the class (Car from the example above)
// - without creating an instance/object (mycar) of the class.
// class Bank {
//     static a = 5
//     b = 9
// }
// let c = new Bank()
// console.log(Bank.a)

//?
//call,apply,bind

// class Bank{
//     constructor(fn){
//         this.name=fn
//     }
//    static display(){
//         console.log(`hi ${this.name}`)
//     }
// }
// let sbi=new Bank('SBI')
// Bank.display.call(sbi)
// Bank.display.apply(sbi)
// Bank.display.bind(sbi)()

//promise
// let count=true
// let a=new Promise(function(resolve,reject){
// if(!count){
//     resolve('promise gets resolve')
// }else{
//     reject('promise get reject')
// }
// })
// // console.log(promise)
// a.then(function(){
//     console.log('if promise resolve then print this block')
// }).catch(function(){
//     console.log('if reject run this')
// })