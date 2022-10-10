// let gayatri={
//     firstName :"gayatri",
//     skills:["java","c++","c"],
//     rollNo:30
// }

// let pooja={
//     firstName:"pooja",
//     skills:["python","data structure","JS"],
//     rollNo:25
// }

// let swati={
//     firstName:"swati",
//     skills:["js","cpp","c"],
//     rollNo:45
// }
// console.log(gayatri)
// console.log(pooja)
// console.log(swati)
// //add
// //update
// //retrieve
// //delete

// //add
// swati.skills.push("advance java")
// console.log(swati)


// //added in object 
// swati.lastName="salvi"            
// console.log(swati)

// //update only one skill
// let newskill = swati.skills.indexOf("js")
// swati.skills.splice(newskill,1,"java script","jsnew")   
// //javascript and jsnew added, JS is replaced with "java script","jsnew"

// ///updated swati object rollNo
// swati.rollNo=44                
// console.log(swati)

// //delete
// delete swati.skills // full array deleted
// delete swati.lastName  //lastName property deleted
// console.log(swati)

// let arr=[1,2,3]
// delete arr[1] //////op will b undefined item , wrong way to delete elelemnt from array
// // console.log(arr)

// //delete 77 from the array
// let arr1=[11,22,33,44,55,66,77,88,99]
// let delel = arr1.indexOf(77)
// console.log(delel) //print indexof el
// let elementsDeleted= arr1.splice(delel,1)
// console.log(elementsDeleted,"elementsDeleted")
// console.log(arr1,"arr1")





// //set values of a class
// class Person{
//     fullName=undefined
//     skills=undefined
//     age=undefined
// }

// let sweety=new Person()
// console.log(sweety)
// sweety.fullName="Gayatri";
// sweety.skills=["ja","cpp","python"]
// sweety.age=30
// console.log(sweety)







// //setting values at the time of object creation
// //class constructor
// class Person1 {
//     constructor(fn, ag, rn) {
//         this.fullName = fn
//         this.age = ag
//         this.rank = rn
//     }
// }
// let sweety1 = new Person1("gayatri", 30, 6)
// sweety1.city = ["dhule"]
// console.log(sweety1)






class person2{
    setAge(ag){
       this.age=ag
    }
    setfullName(fn){
        this.fullName=fn
    }
    setRollNo(rn){
        this.rollNumber=rn
    }
    setAll(ag,fn,rn){
        this.age=ag
        this.firstName=fn
        this.rollNumber=rn
    }

}
let sweety2=new person2()
sweety2.setAll(30,"gayatri",06)
console.log(sweety2)

let namrata=new person2()
namrata.setAge(20)
namrata.setRollNo(44)
namrata.setfullName("Namarata")
console.log(namrata)
// //or
// namrata.setAll(55,"nammu",55)
// console.log(namrata);