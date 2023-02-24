let amol= {
    fullName:"Amol rao",
    ag:45
}
console.log(amol)


let Person=function(fullName,age){
    this.fullName=fullName
    this.age=age
} 
console.log(new Person())

//********************/

let person1 = function(fn,ag){
    this.fullName=fn
    this.age=ag
   /*  this.display=function(){
        console.log(this.fullName)
    } */
}

person1.prototype.display= function(){
    console.log(this.fullName)
}

let gayatri=new person1('Gayatri',23)
let sweety=new person1('Sweety',23)
console.log(gayatri)
console.log(sweety)
gayatri.display()
sweety.display()

//**********IMP

console.log(gayatri instanceof person1)
console.log(person1.prototype === gayatri.__proto__)

person1.prototype.language= "English"
console.log(gayatri.language)


console.log(gayatri.hasOwnProperty('language'))
console.log(person1.prototype.hasOwnProperty('language'))
//************************************************
let Person2= function(fn,ag){
    this.fullName=fn
    this.age=ag
}

let archit= new Person2('Archit Kulkarni',12)

if(archit instanceof Person2){
    archit.fullName="Archit K"
    archit.age=10
}

console.log(archit)
//-------------------------------------
//Array

let names= ['Priyanka','Rutuja','Swapnali']

console.log(names)
console.log(names instanceof Array)
console.log(names.__proto__=== Array.prototype)
names.push('pinky')

//object------->__proto__  ===>  function constructor / class

Array.prototype.removeDuplicate= function(arr){
    return Array.from(new Set(arr))
}

console.log(names.removeDuplicate)

















