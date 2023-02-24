
//get the count of 33 number appear
//  let sum=[11,22,33,44,33,55,66,77,88,99,33,55,33]
// let count=0
// for(let i=0;i<=sum.length;i++){
//     if(sum[i] === 33){
//         count++
// console.log(count)
//     }
// }
// console.log(count) 




// ////Whatsapp occurance of each alphabet
//  let word=['w','h','a','t','s','a','p','p']
// let result={}
// for (i=0;i<word.length;i++){
//     if(result[word[i]]){
//         result[word[i]]=result[word[i]]+1
//     }
//     else{
//         result[word[i]]=1
//     }
// }
// console.log(result) 


//  let word = ['h', 'e', 'l', 'l', 'o']
// let result = {}
// let countOfH = 0
// let countOfE = 0
// let countOfL = 0
// let countOfO = 0

// for (i = 0; i < word.length; i++) {
//     switch (word[i]) {
//         case 'h':
//         countOfH++;
//             break;
//         case 'e':
//             countOfE++;
//             break;
//         case 'l':
//             countOfL++;
//             break;
//         case 'o':
//             countOfO++;
//             break;
//     }
// }
// result[word[0]]=countOfH
// result[word[1]]=countOfE
// result[word[2]]=countOfL
// result[word[4]]=countOfO
// console.log(result)
 




// //////square of numbers
// let numbers2={
//     a:3,
//     b:2,
//     c:5,
//     a:4  ///this will take a's updated value
// }

// console.log(numbers2)
// for(let key in numbers2){
//     numbers2[key]=numbers2[key]*numbers2[key]
// }
// console.log(numbers2)

//---------even and odd count---------------------------------
let arr = [11, 22, 354, 5, 6, 7, 8, 9, 10]
// let evenCount = 0
// let oddCount = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenCount++
//     }
//     else
//         oddCount++
// }
// console.log(evenCount,oddCount);

// // //2nd type of even and odd count
// evenCount = 0
// oddCount = 0
// for (let i = 0; i < arr.length; i++) {
//     arr[i] % 2 == 0?evenCount++:oddCount++
// }
// console.log(evenCount,oddCount);



// // //3rd type
// evenCount = 0
// oddCount = 0

// evenCount=arr.reduce(function(acc,el){
//          if(el%2==0)
//          evenCount++
//           return evenCount
// },0)
// console.log(evenCount);

// oddCount=arr.reduce(function(acc,el){
//     if(el%2!==0)
//     oddCount++
//      return oddCount
// },0)
//  console.log(oddCount);










// //find out how much pair of socks are there in the array
// let arr1=['red','green','red','green','green','purple']
// let newArr={}
// for(i=0;i<arr1.length;i++){
//     if(newArr[arr1[i]]){
//         newArr[arr1[i]]= newArr[arr1[i]]+1
//     }
//     else
//     newArr[arr1[i]]= 1
// }
// console.log(newArr)




// for (let key in newArr){
//         newArr[key]=Math.floor(newArr[key]/2)
//     }
// console.log(newArr)



















