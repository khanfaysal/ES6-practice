const person = {name: 'khan', age: 25, job: 'programmer', gfName: 'jantoos', address: 'katabon', friendList: ['kala','bala','dala','rala']};

/* const  gfName = person.gfName;
const address = person.address;
const job = person.job; */
const {name,job,address} = person;
console.log(name,job);
/* console.log(address);
console.log(job); */

//destructing assignment 
let a, b, rest;
[a, b, ...rest] = [10,29,38,73,723];
console.log(rest);