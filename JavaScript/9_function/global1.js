/* //user defined objects

let amol= {
    fullname:"amol rao",
    age: 23,
    skills: 'python'
}
class person{
   constructor(fullname,age,rollno){
       this.fullname=fullname
       this.age=age
       this.rollno=rollno
   }
}

let p1=new person('swati',30,45)
console.log(p1);
console.log(amol)
 */
/////////////////////////////////////////
/* 
class person{
    displayFullName(fullname){
        this.fullname=fullname
    }
    displayAge(age){
        this.age=age
    }
    displayRollno(rollno){
        this.rollno=rollno
    }
}

let p2=new person()
p2.displayFullName("Ritika")
p2.displayAge(28)
p2.displayRollno(56)
console.log(p2)
 */

////////////////////////////////////////////////

/* function addition() {
    let x = 20
    let y = 30
    console.log(x + y)
    function addition2() {
        let a = 2
        let b = 2
        console.log(x + y)
        console.log(a + b)
        function addition3() {
            let c = 3
            let d = 3
            console.log(x + y)
            console.log(a + b)
            console.log(c + d)
        }
        addition3()
    }
    addition2()
}
addition()
 */



/* 
function aa(x,y){
    console.log(x+y)
    return x+y
    console.log(x+y) //no statement executed after the return statement
}
let bb=aa(10,20)
console.log(bb)
 */

/* function add5(x,y){
   let add=function() {            ///function add()  // let add=()=>        //valid
        console.log(x+y)
    }
    return add
}
let uuu =add5(10,20)
console.log(uuu)
uuu() */

/* let add7= function(x,y){
    console.log(x+y)
    return x+y
}

let aaa=add7(12,13)
console.log(aaa,"returned value") */

/* 
let add8=(x,y)=>{
    console.log(x+y)
    return x+y
}
let ra=add8(12,13)
console.log(ra) */
var fullName = "Shweta"
let person = {

    fullName: "Reena",
    rollNo: 23,
    age: 31,
    display: function () {
        console.log(this, "this object")
        console.log(this.fullName, "parent")     //this ===> person
          function display2(){
        console.log(this, "this object")

    console.log(this.fullName,"child")  //this===>window
            }
    display2()
    }  
}
person.display()
























