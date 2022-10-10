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
