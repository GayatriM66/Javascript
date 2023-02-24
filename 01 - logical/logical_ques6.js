

let arr = [1, 2, 3, 4, 5, 6]
newArr = []
for (i = 0; i < 2; i++) {
    newArr = []
    for (j = 0; j < arr.length - 1; j++) {
        if (newArr.length == 0) {
            firstVariable = arr[arr.length - 1]
            newArr.push(firstVariable)
        }
        newArr.push(arr[j])
        console.log(newArr)
    }
    console.log(newArr)
    arr = newArr
}