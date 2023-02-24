// //  //Object has a property and Methods



//  let mapA= new Map()
// // console.log(mapA)       //map(0) {}
// // console.log(mapA.size)  //0

// //action and return type
// mapA.set('Question','Answer')
// mapA.set('isMarried',true)
// mapA.set("age",33)
// //console.log(mapA)



// let sk=['python','java','CPP']
// let family={mother:"MOM",father : "DAD"}

// mapA.set(sk,"skills")
// mapA.set(family,'Parents')  ////object as a key family
// //console.log(mapA)

// //keys
// console.log(mapA.get(sk))
// console.log(mapA.get(family))


// console.log(mapA.get("skills")) //undefined
// console.log(mapA.get(12))   //undefined
// console.log(mapA.get(true))  //undefined



// // //set() get() clear()
// // //mapA.clear()        //clear the map
// let a=mapA.has(family)  //key is present or not
// console.log(a)

// console.log(mapA.keys())
// console.log(mapA.values())
// console.log(mapA.entries())

// mapA.delete(sk)
// console.log(mapA)
// // //set() get(key) has() clear() keys() values() entries() delete()

// //------------------------------------------

// let mapB= new Map()
// mapB.set('Fruit','Apple')
// //console.log(mapB)
// console.log(mapB.get('Fruit'))
 

////---------------------------------------------

 let mapC= new Map([
    ['Question','Answer'],
    ['What is the capital 0f Maharashtra','Mumbai'],
    ['What is the capital of Rajasthan', 'Jaipur'],
    ['what is the capital of Madhya Pradesh','Bhopal'],
    ['what is the capital og Goa','Panaji']

])
 console.log(mapC) //prints Map in obj 

// for(let key of mapC){       //print in array form
//     console.log(key)
// }



// for(let key of mapC.keys()){
//     console.log(key)
// }





// for(let key of mapC.values()){
//     console.log(key)
// }


// for(let [k,v] of mapC.entries()){
//     console.log(k,v)
// } 









let mapD= new Map([
    ['Question','Answer'],
    ['What is the capital 0f Maharashtra','Mumbai'],
    ['What is the capital of Rajasthan', 'Jaipur'],
    ['what is the capital of Madhya Pradesh','Bhopal'],
    ['what is the capital og Goa','Panaji']

])
let correctAnswer=0;

let reg= /^What/i
for(let[key,value] of mapD){
    if(reg.test(key)){
  //     let userName= prompt(key)
        if(userName === value){
            correctAnswer++
        }
    }
}
if(correctAnswer==4){
    console.log('GoldMedal')
}
if(correctAnswer==3){
    console.log('Silver Medal')
}
if(correctAnswer==2){
    console.log('Bronze Medal')
}
else{
    console.log('Please try again !!!!')
}
console.log(mapD[0]) 


// //set

// //Set()  Array.from(setName) setName.add(value)  setName.clear() setName.has(value)=>true/false setName.size() 
// //setName.delete(value) 

// let array =[11,22,33,444,55,66,7,7,7,6,6]
// console.log(array)

// setNew=new Set(array)
// console.log(setNew)
// console.log(Array.from(setNew))  //created array from the set values

// let set1 = new Set([1,2,4,6,7,8,2,2,2])
// console.log(set1)

// console.log(set1.add(40))
// console.log(set1)
// //set1.clear()
// console.log(set1) //emptyset

// console.log(set1.has(322))

// console.log(set1.size)

// set1.delete(40)
// console.log(set1)

// console.log(set1.keys())
// console.log(set1.values())


// for(let [a,b] of set1.entries()){
//     console.log(a,b)
// }

// /* let setj= new Set([['MH','Mumbai'],['Up','Lucknow'],['RJ','jaipur']])
// for(let [a,b] of setj.entries()){
//     console.log(a[0],b[1])
// }

// let setK= new Set([[1,11],[2,22],[3,33],[4,44]])
// console.log(setK)

// for(let [key,value] of setK.entries()){
//     console.log(key[0],value[1])
// }


// let setF= new Set([['fruit1','Apple'],['fruit2','Banana'],['fruit3','Mango']])
// console.log(setF)
// console.log(setF.entries())

// for (let [k,v] of setF.entries()){
//     console.log(k[0],v[1])
// }
//  */



// /* 
// // let mapC = new Map([
// //     ["question :", "answer"],
// //     ["What is capital of Maharashtra", "Mumbai"],
// //     ["What is capital of Madhaya Pradesh", "Bhopal"],
// //     ["What is capital of Rajasthan", "Jaipur"],
// //     ["What is capital of Gujrat", "Gandhinagar"]

// // ]);

// // let correctAnswer = 0
// // let reg = /^What/i
// // for (let [key, value] of mapC) {
// //     // if(key !== "question :"){
// //     //     let userNamer =prompt(key)
// //     //     if(userNamer === value){
// //     //         correctAnswer += 1
// //     //     }
// //     // }

// //     if (reg.test(key)) {
// //         let userNamer = prompt(key)
// //         if (userNamer === value) {
// //             correctAnswer += 1
// //         }
// //     }

// // }

// // if (correctAnswer == 4) {
// //     console.log('Gold Medal')
// // }
// // else if (correctAnswer == 3) {
// //     console.log('Silver Medal')
// // }
// // else if (correctAnswer == 2) {
// //     console.log('Bronze Medal')
// // }
// // else {
// //     console.log('Please try again !')
// // }

// //console.log(mapC[0])

//  */