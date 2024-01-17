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













//////////////////////
// //manually assigning a single element to a new variable
// let names = ["ram", "sham", "rohan", "pinky", "reena"]

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]
// let e = names[4]
// console.log(a, b, c, d, e)

// //
// let [f, g, h, i, j] = names
// console.log(f, g, h, i, j)









// let student ={
//     fullName : "Gayatri",
//     age : 30,
//     rollno : 26,
//     state: "maharashtra"
// }
// let {fullName,age,rollno,state}=student
// console.log(fullName)
// console.log(age)
// console.log(rollno)
// console.log(state)

// let {fullName:fn,age:ag,rollno:rn,state:st}=student
// console.log(fn)
// console.log(ag)
// console.log(rn)
// console.log(st) 
// // //




// //how to deal with array while destructuring object
// let student1 ={
//     fullName1 : "Gayatri",
//     age1 : 30,
//     rollno1 : 26,
//     Address1: ["dhule","maharashtra",424001]
// }

// let {fullName1:f1,age1:a1,rollno1:r1,Address1:[ct1,st1,pd1]}=student1

// // console.log(student1.fullName1)
// // console.log(student1.age1)
// // console.log(student1.rollno1)
// // console.log(student1.Address1[2])

// console.log(f1)
// console.log(a1)
// console.log(r1)
// console.log(ct1)
// console.log(st1)
// console.log(pd1) 







// let student2 ={
//     fullName1 : "Gayatri",
//     age1 : 30,
//     rollno1 : 26,
//     Address1: ["dhule","maharashtra",424001],
//     classes:{
//         python :"py8pm",
//         javascript:"js9pm"
//     } 
// }
// let {fullName1:fn,age1:ag,rollno1:rn,Address1:[ct2,st2,pd2],classes:{python:py,javascript:js}}= student2
// console.log(fn)
// console.log(ag)
// console.log(rn)
// console.log(ct2)
// console.log(st2)
// console.log(pd2)
// console.log(py)
// console.log(js)
 







// let arr=[{
//     name1:"riya",
//     name2:"reena"
//     },
//     {
//         lastName1 :"mishra",
//         lastName2: "mahale"
//     }]

//     let [{name1:n1,name2:n2},{lastName1:l1,lastName2:l2}]=arr
//     console.log(n1,n2,l1,l2)
     








    // let arr=[{
    //     name1:"riya",
    //     name2:"reena"
    //     },
    //     {
    //         subject1 :["python"],
    //         subject2: ["java","javascript"]
    //     }]
    
    //     let [{name1:n1,name2:n2},{subject1:[py],subject2:[j1,j2]}]=arr
    //     console.log(n1,n2,py,j1,j2) 







// let ii = {
//     mainString: {
//         string: {
//             substring: {
//                 str1: "string1",
//                 str2: "string2"
//             }
//         }
//     }
// }
// //we can not rename object name  //mainString:ms1   error
// // let {mainString:ms1{string:s1{substring:sb1{str1:ss1,str2:ss2}}}}=ii
// // console.log(ms1)

// // console.log(ii.mainString.string.substring.str1)
// let {mainString:{string:{substring:{str1:s1,str2:s2}}}}=ii

// console.log(s1,s2) 



////////////////////////////

//rest

/* function add(...arr){
  let sum=  arr.reduce(function(acc,el){
        return acc+el
    },0)
    return sum
}


let total = add(12,13,14,33,44,55,66,77,88,99,00)
console.log(total)
 */

//spread


/* function add(a,b,c,d){
    console.log(a+b+c+d)
}
num=[10,20,30,40]
let total=add(...num)
 */

//function which will sort the elements greater than first element of the array
/* function sort(first,...arr){                ////spread
    let sorted= arr.filter(function(el){
              return  el>first
    })
    return sorted
}

let ages=[18,34,55,23,12,4,21,4,17,20,44,10,22,31,44,55,11]
let sortedarray=sort(...ages)///rest
console.log(sortedarray)

let ages1=[30,34,55,23,12,4,21,4,17,20,44,10,22,31,44,55,11]
let sortedarray1=sort(...ages1)///rest
console.log(sortedarray1)

 */



// 11,22,33 ----> [11,22,33]--- // rest
// [11,22,33]---> 11,23,44 --- // spread

//----------------------------------->


let ages1 = [11, 22, 33, 09, 12, 65]

function checkNumbers(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }
    return newArray
}
let fnabove18 = function (el) {
    return el > 18
}

let add2 = function (el) {
    return el + 2
}

let mulBy3 = function(el) {
    return el * 3
}

let abovee18 = checkNumbers(ages1, fnabove18)
let multiBy3 = checkNumbers(ages1, mulBy3)
let addTwo = checkNumbers(ages1, add2)

console.log(abovee18)
console.log(multiBy3)
console.log(addTwo)