let arr=[10,10,8,23,55,61]
let k=20;

for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        if((arr[i]+arr[j])==k){
            console.log("true")
        }
    }
}