class BankB{
    constructor(acName,acNo,bal){
        this.fullName= acName
        this.accountNumber=acNo 
        this.balance=bal
        this.trans=[]
    }
    deposit(amount){
        this.balance=this.balance+amount
        this.trans.push(amount)
        return this.balance
    }
    withdrawl(amount){
        if(this.balance>amount){
        this.balance=this.balance-amount
        this.trans.push(amount)
        return this.balance
        }
        else{
            console.log("Insufficient Balance")
        }
    }
    createUserName(){
        this.UserName=
        this.fullName.split(" ").map(function(el){
            return el[0]
        }).reduce(function(acc,el){
            return acc+el
        },"")
    }
    transaction(){
        return this.trans.slice(-5)
    }
}
let gayatri= new BankB("Gayatri Mahale More",566765323412,1200000)
let transactions=[12000,-45000,560000,60000000,-76000,10000000,30000,-35000]
for(let x=0;x<transactions.length;x++){
    if(transactions[x]<0){
    gayatri.withdrawl(transactions[x])
}
else{
    gayatri.deposit(transactions[x])
}
}
gayatri.createUserName()
gayatri.deposit(10900)
gayatri.withdrawl(10900)
console.log(gayatri.trans)
console.log(`The last five transcation of username ${gayatri.UserName}: ${gayatri.transaction()}`)