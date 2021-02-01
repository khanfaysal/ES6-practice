 const bou = "jantoos";
// bou1 = "fantoos";
console.log(bou);

const numbers = [23,343];
numbers[1] = 88;
numbers.push(22);
console.log(numbers);


let patientName = 'Rahim Chacha';
patientName = "chachi";
console.log(patientName);

let sum = 0;
for(var i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);
 


 
// const also support rename object but not supported reassign but var is freedom bird everyplace access
if(true){
    const constVariable = {
        name: 'khan',
        age: '25 years'
    };
     constVariable.name = 'faysal';
     console.log(constVariable);
}
//let is defined everytime inside the scope here if area his scope so thats why is output to be error
 if(true){
    let letVariable = 'This is let variable';
}
console.log(letVariable);

// console log korese if block a so no error, reassign let value but not declare outside the function or parent scope
if(true){
    let letVariable = 'This is let variable';
    letVariable = 'This is reassign let value';
    console.log(letVariable);
}

//we access parent variable by child(inside function) this called js scope
var a = 3;
function f(){
    // var a = 4;
      console.log(a);
}
// console.log(a);
 f();

