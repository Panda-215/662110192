console.log('A1');
var x = 10;
if (x === 10) {
    var y = 100;
    console.log(y);
}
console.log(y);


console.log('A2');
var x = 10;
if (x === 10) {
    var y = 100;
    console.log(y);
}
console.log(y);

//A3
// console.log('A3');
// var x = 10;
// let y = 100;
// if (x === 10) {
//     console.log(y);
// }
// console.log(y); 


console.log('B1');
let myArray = [1, 2, 3]
myArray.forEach(element => {
    console.log(element); //?
});

//B2 insert s to name of array
console.log('B2');
let myArrays = [1, 2, 3];
for (const iterator of myArrays) {
    console.log(iterator); //?
}

//C1
console.log('C1');
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, numbersOne];
console.log(numbersTwo) //?

//C2 insert s to name of array
console.log('C2');
const numbersOnes = [1, 2, 3];
const numbersTwos = [4, 5, numbersOne];
console.log(numbersTwo) //?


//4
let arr = [1, 2, 3, 4];
console.log(fun(arr));
function fun(input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}