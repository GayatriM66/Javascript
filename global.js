function num1(x, y) {
    return function add() {
        console.log(x + y)
        return function mul() {
            console.log(x * y)
            return function div() {
                console.log(x / y)
            }
        }
    }
}
console.log("----------Add()-----------")
let num = num1(10, 20)
let numAdd = num()
console.log("----------mul()------------")
let numAddMul=numAdd()
console.log("----------div()-----------")
let numAddMulDiv = numAddMul()