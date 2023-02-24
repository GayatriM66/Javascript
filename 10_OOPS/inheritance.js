//Inheritance

class Students {
    constructor(fn, rn, ag) {
        this.firstName = fn
        this.rollNumber = rn
        this.age = ag
    }
    display() {
        console.log(this.firstName)
    }
}

class Teacher extends Students {
    constructor(fn, rn, ag, sal) {
        super(fn, rn, ag)
        this.salary = sal
    }
    display(){
        console.log(`Mr. ${this.firstName}`)
        super.display()
    }
}
class Professor extends Teacher {
    constructor(fn, rn, ag, sal, spl) {
        super(fn, rn, ag, sal)
        this.specialisation = spl
    }
    display(){
        console.log(`Pro. ${this.firstName}`)
        super.display()
    }
}


let pro=new Professor("Sheela",12,44,120000,"Chemistry")
pro.display()
//console.log(pro)