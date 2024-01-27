// let array = [1, 3, 5, 6, 7, 8,12]
// function getSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         sum += element;
//     }
//     // return sum
//     let del = sum / array.length
//     console.log(del);

// }
// let sum = getSum(array);
// console.log(sum);



function squareArray(arr, callback) {
    let squaredArray = arr.map(callback);
    return squaredArray;
}

let mass = [2, 3, 4];

let squaredArray = squareArray(mass, function (num) {
    return num ** 2;
});

console.log(mass); // [2, 3, 4]
console.log(squaredArray); // [4, 9, 16]