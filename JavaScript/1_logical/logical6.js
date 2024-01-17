

// let arr = [1, 2, 3, 4, 5, 6]
// newArr = []
// for (i = 0; i < 2; i++) {
//     newArr = []
//     for (j = 0; j < arr.length - 1; j++) {
//         if (newArr.length == 0) {
//             firstVariable = arr[arr.length - 1]
//             newArr.push(firstVariable)
//         }
//         newArr.push(arr[j])
//         console.log(newArr)
//     }
//     console.log(newArr)
//     arr = newArr
// }



//find the 2 highest number from the array
let arr =[10,43,67,22,45,78,12,66,76]
let firstHighest=0
let secondHighest=0
for(let i=0;i<=arr.length;i++){
    if(arr[i]>firstHighest){
    firstHighest=arr[i]
    }
    if(arr[i]>secondHighest && arr[i]<firstHighest){
        secondHighest=arr[i]
    }
}
console.log(firstHighest)
console.log(secondHighest)