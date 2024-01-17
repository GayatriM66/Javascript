// ///Print all the alphabets in string in lowercase
// //count the vowels in string
// let count = 0
// let state = "Maharashtra"
// for (i = 0; i < state.length; i++) {
//     console.log(state[i].toLowerCase())
//     if (state[i] == 'a' || state[i] == 'e' || state[i] == 'i' || state[i] == 'o' || state[i] == 'u') {
//         count++
//     }
// }
// console.log("numbers of vowels in Maharashtra are ", count)




// //using switch case count vowels
// count = 0
// for (i = 0; i < state.length; i++) {
//     switch (state[i]) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             count++
//             break;
//     }
// }
// console.log("numbers of vowels in Maharashtra are ", count)






// //print the string in reverse
// let namee = "Gayatri"
// let rev =""
// for (i = 0; i < namee.length; i++) {
//         rev=namee[i]+rev
// }
// console.log(rev)

// //
// rev =""
// for(i=namee.length-1;i>=0;i--){
//     rev=rev+namee[i]
//     console.log(namee[i],i)
// }
// console.log(rev)







// // //give the index of sweety name occurance

// let nick=["golu","sweety","sweety","nikku","pikku","sweety"]
// for(i=0;i<=nick.length;i++){
//     if(nick[i]==="sweety"){
//         console.log(i)
//     }
// }
// //give index with map
// console.log('---------map--------------------')

// nick.map(function(el,index){
//     if(el==="sweety"){
//         console.log(index)
//     }
// })


// nick.forEach(function(el,index){
//     if(el==="sweety"){
//         console.log(index)
//     }
// })













// //find the city whose length is 6
// let city=["nagpur","pune","jaipur","delhi"]
// count=0
// for(let i =0; i<city.length;i++){
//     if(city[i].length==6){
//         count++
//     }
// }
// console.log(count)

// count=0
// city.filter(function(el,index){
//     if(el.length==6){
//         count++
//     }
// })
// console.log(count)









// result={}
// console.log(result['b'])

// if(undefined){
//     console.log('hello')
// }
// else{
//     console.log('bye')
// }