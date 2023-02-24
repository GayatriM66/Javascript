//object literal  //137

let gayatri = {
    fullName : "Gayatri Mahale",
    rollNo:  3333
}
console.log(gayatri)

//function constructor
let Person = function(firstName,roll){
    this.firstName=firstName
    this.roll=roll
}

let amol= new Person ('Amol rao',487356)
let sweety= new Person('Sweety Mahale',62534)

console.log(amol)
console.log(sweety)

//_proto_ === person.prototype

console.log(amol instanceof Person)
console.log(sweety instanceof Person)
console.log(amol.__proto__===Person.prototype)

//vehicle function constructor
let Vehicle= function (type, regNo){
    this.type=type
    this.regNo=regNo

    /* this.display = function(){
        console.log(this.type)
    } */
}

let baleno= new Vehicle ('Maruti Suzuki',2343242)
let i20 = new Vehicle ('Hyundai',5678443)


console.log(baleno)
console.log(i20)
//console.log(baleno.display())// Not working
//console.log(i20.display())// ///Not working 

Vehicle.prototype.display= function(){
    console.log(this.type)
}

baleno.display()
i20.display()

//-----------------------------------

let Student =function (fn,rn){
    this.firstName = fn
    this.rollNumber=rn
}

let simran = new Student('Simran Motwani', 43234)


Student.prototype.display= function(){
    console.log(this.firstName)
}
Student.prototype.language='Hindi'

console.log(simran)
simran.display()
console.log(simran.language)

console.log(simran.hasOwnProperty('firstName'))//true
console.log(simran.hasOwnProperty('rollNumber'))//true
console.log(simran.hasOwnProperty('language'))//false
console.log(simran.hasOwnProperty('display'))//false

console.log(simran.__proto__===Student.prototype) //true

//-----------------------------------------------------

let names= ['gayatri','sweety','simran','simran']
console.log(names)
console.log(names instanceof Array) //true
console.log(names.__proto__===Array.prototype)//true
names.push()
console.log(Array)
//Array
//Method
Array.prototype.duplicate= function(arr){
    names= Array.from(new Set(arr))
}
names.duplicate(names)
console.log(names)

//--------------------------
let city= ['hello','how','are','you']
let sr=city.sort()
console.log(sr)//sorted
console.log(city)//sorted
console.log(city.sort())

let name1= ['hello','how','are','you']
console.log(name1)
name1 = ['aa','bb','cc'] //updated with this value
console.log(name1)


//-----------------------------------
let Bank = class{
     //deposit= "deposit"
     constructor(acName, acno, bal){
         this.accountHolderName=acName
         this.accountNumber=acno
         this.balance=bal
     }
     showBalance(){
         console.log(this.balance)
     }
     set depositt(msg){
         this.deposit=msg
     }
}
console.log( new Bank())
//add function
Bank.prototype.greet = function(){
    console.log('Good Morning...!!!')
}
//add variable
Bank.prototype.AccountType= "Saving"

let acOne=new Bank('Riya',446532626,60000)
let acTwo=new Bank('Pinky',44543,100000)
console.log(acOne)
console.log(acTwo)
console.log(acOne.__proto__)
console.log(acOne.__proto__ === Bank.prototype)
acOne.showBalance()// not printing
acOne.greet()
acOne.AccountType="Current"
console.log(acOne)

//------------------------

class Bank2{
    constructor(name, address){
        this.name='Anjali'
        this.address='Pune'
    }
    greet(){
        console.log('good evening ...!!!')
    }
    static qwerty(){
        console.log('Hey, this is a static method.')
    }
}

let reena= new Bank2('reena','Pune')
console.log(reena)
reena.greet()
//reena.qwerty() //is not a function











