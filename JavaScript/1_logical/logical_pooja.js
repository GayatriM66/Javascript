//**********program 1***************
//remove duplivcate elements from array
//includes, indexof, filter
/////index[0  1  2  3  4  5  6  7  8 ]
let arr = [1, 2, 9, 3, 3, 8, 9, 9, 10]
let newArr = []


// //using includes
// for(let i=0;i<arr.length-1;i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
//  }
// console.log(newArr)


// //using indexof
// newArr = []
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)


// //it always picks up the current index if any new element is found
// //so the current index of array element is equal to the index
// //using filter
// // /////index[0  1  2  3  4  5  6  7  8 ]
// //let arr = [1, 2, 9, 3, 3, 8, 9, 9, 10]
// newArr = []
// let aa = arr.filter((el, index) => {
//    // console.log(el, arr.indexOf(el), index)
//    return arr.indexOf(el)===index
// })
// console.log(aa)

// //using set()
// //newArr=[]
//  newArr=new Set(arr)
// console.log(newArr)





//**********program 2***************

//find the max and min from the array
//let arr1 = [6, 2, 9, 10, 3, 8, 9, 9, 4]

// let min=arr1.reduce((acc,el)=>{
//             if(el<acc){
//             acc=el
//         }
//         return acc
// })
// console.log(min)

// let max=arr1.reduce((acc,el)=>{
//     console.log(acc,el)
//     if(el>acc){
//         return el
//     }
//     return acc
// },0)
// console.log(max)




////program 3
//reverse string 

let str = "How Are You"
let rev = " "
// for(let i=0;i<str.length;i++){
//     rev=str[i]+rev
// }
// console.log(rev)

//or

// for(let i=str.length-1;i>=0;i--){
//     rev=str[i]+rev
// }
// console.log(rev)




// ////program 4 
// //find the largest word in the string

let str1 = "Have a nice dfffffy ahead."
//let largeWord=""
// str1=str1.split(" ")             //imp
// for(let i=0;i<str1.length;i++){
//     if(str1[i].length>largeWord){
//         largeWord=str1[i].length
//     }
// }
// console.log(largeWord)


//or


// let largeword=str1.split(" ").reduce((el1,el2)=>{
//     console.log(el1,el2)
//     if(el1.length>el2.length){
//         return el1
//     }
//     else{
//         return el2
//     }
// })
// console.log(largeword,largeword.length)




//program 5
//print first 10 even numbers

// for(let i=0;i<20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


//or

// for(let i=0;i<20;i+=2){
//     console.log(i)
// }




//program 6
//check the string is present in the array or not

let city = "Chandrapur Nagpur Pune Nashik"
let word = "Pune"
// //city=city.split(" ")    //you can comment this also, still it will work
// console.log(city)
// if(city.includes(word)){
//     console.log("city is present")
// }
// else{
//     console.log("city is not present")
// }


////or


// if(!(city.indexOf(word)==-1)){
//     console.log(word, "is present")
// }



// ////program 7
// //remove spaces in between string 

// let str3="Mum bai"
// let strNew= str3.split(" ").join("")
// console.log(strNew)




// //program 8 
// //remove spaces iun between and print in reverse
// let str3="Mum bai"
// let strNew= str3.split(" ").join("")
// let strRev=""

// for(let i=0;i<strNew.length;i++){
//     strRev=strNew[i] + strRev
//     }

// console.log(strRev)







//program 9
//calculate vowels in the string 

// let str3 = "This is for counting the vowels in the string."
// let count=0
// str3=str3.toLowerCase()
// console.log(str3)
// for(let i=0;i<str3.length;i++){
//     if(str3[i]=="a" ||str3[i]=="e" ||str3[i]=="i" ||str3[i]=="o" ||str3[i]=="u"){
//         count++
//     }
// }
// console.log(count)



//or



// let str3 = "This is for counting the vowels in the string."
// let count = 0
// for (let i = 0; i < str3.length; i++) {
//     switch (str3[i]) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u": count++
//             break;
//     }
// }
// console.log(count)




//program 10
// //take one number and return addition of factors of that number
// let number =10
// let factor=0
// for(let i=0;i<number;i++){
//     if(number%i==0){
//         factor=factor+i
//     }
// }
// console.log(factor)




// //program 11
// //check number whether it is perfect or not
// //perfect number is : 
// //sum of all factors == number*2
// //1+2+3+6   ==  6*2   i.e. 12      //example of perfect number

// let number =8128       //6,28,496,8128
// let factor=0
// for(let i=0;i<=number;i++){
//     if(number%i==0){
//         factor=factor+i
//     }
// }
// if(factor==(number*2)){
//     console.log("It is a Perfect Number")
// }
// else{
//     console.log("It is not a perfect number")
// }




// //program 12
// // //Take one no and return the no of digit from that no

// let z=234
// let result=[]
// newN=z.toString()
// for(let i=0;i<newN.length;i++){
//     result.push(newN.charAt(i))
// }
// console.log(result)





// //program 13        //pending
// //Take two no one is row and other is column and print it in square, right angle triangle

// let row=3
// let col=3
// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         if(row[i]==col[j]){
//             console.log("*")
//         }
//     }
// }

//program 14
//Calculate count of capitals in the string

let str11="My name is Priyanka Dani"
count=0
// for(let i=0;i<str11.length;i++){
//     if(str11.charCodeAt(i)>=65 && str11.charCodeAt(i)<=90){
//         count++
//     }
// }
// console.log(count)
// console.log(str11.charCodeAt(4))


//or


// for(let i=0;i<str11.length;i++){
//     if(str11[i]>='A' && str11[i]<='Z'){
//         count++
//     }
// }
// console.log(count)


//or


//  let capitalss="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// // let str12="My name is Priyanka Dani"
// // for(let i=0;i<str12.length;i++){
// //     if(capitalss.includes(str12[i])){
// //         count++
// //     }
// // }
// // console.log(count)


// //or


// count=0
// for(let i=0;i<str11.length;i++){
//     if(capitalss.indexOf(str11[i])>=0){
//         count++
//     }
// }
// console.log(count)





// //Problem 15
// //input-"you are great"  output-"uoy era taerg"
// let str14="you are great"
// let revr=[]
// let str15=str14.split(" ")
// for(let i=0;i<str15.length;i++){
//     for(let j=str15[i].length-1;j>=0;j--){
//         revr.push(str15[i][j])
//     }
//     revr.push(" ")
// }
// console.log(revr.join(""))