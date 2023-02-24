class Shoppingbill {
    constructor(rice, dal) {
        this.Rice = rice;
        this.Dal = dal;
    }
    totalbill() {
        let totalbal = [this.Rice, this.Dal];
        let price = totalbal.reduce(function (acc, el) {
            return acc + el
        }, 0)
        console.log("total bill is ", price);
    }
}
let first = new Shoppingbill(10, 60);
console.log(first, "elements are ")
first.totalbill();
