
// backup function parameter value
function add(num1, num2 = 29){
    // 
    // num2 = num2 || 20;
    return num1 + num2;
}
const total = add(5, 5);
console.log('your total number is :', total);

