// function doubleIt(num){
//     return num * 2;
// }
/* const doubleIt = function(num){
    return num * 4;
}
var result = doubleIt(5);
console.log(result);
 */

 // normally we use traditional function
/* function double(num){
    return num * 2;
}
const total = double(4);
console.log(total) */;


// here we declare function also
/* const double = function myFunc(num){
    return num * 2;
}
const result = double(6);
console.log(result); */

//  single line arrow function use 
const double = (num1, num2) => num1 + num2;
const double1 = () => 5;
const result = double(9 ,10);
const result1 = double1();
console.log(result1);


const doMath = (x, y,z) => {
    const sum = x + y - z;
    const diff = x -y + z;
    const result = sum * diff;
    return result;
}
const total = doMath(8,5,2);
console.log(total);