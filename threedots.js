const ages = [12,34,65];
const ages1 =[34,45,67,45,47];
const ages2 =[45,67,90,91,70];
// old js concat
const allAges = ages.concat(ages1).concat([6]).concat(ages2);
const allAgesList = [ages, ages1, ages2];
//ES6 concat
const allAgesLists = [...ages, ...ages1, 6, ...ages2];
console.log(allAgesLists);

//ES6 array max
/* const business = 360;
const minister = 390;
const programmer = 490; */
const totalIncome = [360,390,490,456,657,874,678];
const maximum = Math.max(...totalIncome);
// const maximum = Math.max(business,minister,programmer);
console.log(maximum);