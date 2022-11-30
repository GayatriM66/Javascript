/* /// factorial of single number
let number=50
for (i=0;i<=50;i++){
if(number%i==0)
console.log(i, "is a factor of 50")
} */

//scope of variable
/* let j = 10
var k =10
console.log(i,j,k)
for(var i = 0;i<=3;){
console.log(i,j,k)
i++
}
console.log(i,j,k) */

//factors of variables of numbers in array

let arr=[10,20,15]
var ar1=[]
for(i=0;i<arr.length;i++){
    
    for(j=1;j<=arr[i];j++){
        if(arr[i]%j==0){
            ar1.push(j)
        }
    }
}
console.log(ar1)