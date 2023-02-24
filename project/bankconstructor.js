class Bank {
    constructor(fN, acNo, bal) {
        this.firstName = fN
        this.accNo = acNo
        this.balance = bal
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdrawl(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
        }
        else {
            console.log("insufficient balance")
        }
    }
}
let rani = new Bank();
//console.log(rani);

let ranii = new Bank("ranii", 666666, 4500000000);
//console.log(ranii);

ranii.deposit(20000);
//console.log(ranii);

ranii.withdrawl(5000);
//console.log(ranii);

ranii.withdrawl(1000000)//insufficient balance

let rani1 = new Bank("rani1", 1001, 450000);
let rani2 = new Bank("rani2", 1002, 80000);
let rani3 = new Bank("rani3", 1003, 20000);
let rani4 = new Bank("rani4", 1004, 12570);
let rani5 = new Bank("rani5", 1005, 4900);

//console.log(rani1, rani2, rani3, rani4, rani5)
//**************************************************************************************************8 */

class Bank1 {
    
    constructor(fN, acNo, bal) {
        this.firstName = fN;
        this.accountNumber = acNo;
        this.balance = bal
        this.transactions = []
    }
    
    deposit(amount) {
        this.balance = this.balance + amount;
        this.transactions.push(amount);
    }
    withdrawl(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            this.transactions.push(amount);
        }
        else {
            console.log("insufficient balance", this.balance);
        }
    }
    }        

let students=[new Bank1("rani1", 1005, 20000),
new Bank1("rani2", 1006, 20000),
new Bank1("rani3", 1007, 20000),
new Bank1("rani4", 1008, 20000),
new Bank1("rani5", 1009, 20000)]

for (let key in students){
    console.log(students[key]["firstName"])
    //console.log(students[key].firstName)   //same
}

/*
//print last 5 transactions 
//let rani11 = new Bank1("rani", 10005, 40000)
        rani11.deposit(1000)
        rani11.withdrawl(500)
        rani11.deposit(1000)
        rani11.withdrawl(500)
//console.log(typeof Bank1.students) ////undefined****
        rani11.deposit(44000)
        rani11.withdrawl(6600)
        rani11.deposit(34000)
        rani11.withdrawl(30000)
        rani11.deposit(5000)
       console.log(rani11)
        console.log(rani11.transactions.slice(-5))
        students.push(rani11)
        console.log(students)


*/
