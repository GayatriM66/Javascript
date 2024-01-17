//Object creation by 3 ways
//1- function constructor

let bookTicket = function(nm,ticNo,date){
    this.name=nm
    this.ticketNumber=ticNo
    this.bookingDate=date
    // this.display =function(){
    //     console.log(this.ticketNumber)
    // }
}
let Reena= new bookTicket("Reena",45633,"12-02-2022")
console.log(Reena)

bookTicket.prototype.display= function(){
    console.log(this.ticketNumber)
}

let purva = new bookTicket("Purva",23467,"12-02-2022")
console.log(purva)
console.log(purva.display())
console.log(Reena.display())

//---------------------------------------
//2. Object creation through ES6 class

class student{
    constructor(sName,rNo){
        this.studentName=sName
        this.rollNumber=rNo
    }
    display(){
        console.log(this.studentName)
    }
}

let sanika = new student('Sanika',32)
let suvarna = new student('Suvarna',34)
console.log(sanika)
console.log(suvarna)