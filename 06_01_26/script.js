/* Loops in Javascript */

/*

for (initialization; condition; increment/decrement) {
    // code to be executed
} 

do {
    // code to be executed
} while (condition);

while (condition) {
    // code to be executed
} 

for (variable in object) {
    // code to be executed
}   

for (variable of iterable) {
    // code to be executed
}

*/

/* for loop */

for(let i = 0; i <= 10; i++){
  console.log("for loop" , i); 
}

/* do-while loop */

let j = 0
do{
  console.log("do while" , j);
  j++;
}while(j <= 10)


/* while loop */

let k = 0;

while(k <= 10){
  console.log("while loop" , k);
  k++;
}

/* for in loop */

const profile = {
  name:"Niraj",
  age:25,
  gender:"Male",
  email:"example@gmail.com"
}

console.log(profile.name);
console.log(profile.age);
console.log(profile.gender);
console.log(profile.email);

for(k in profile){
  console.log(`${k} : ${profile[k]}`);
}

/* for of loop */

let num = [1 , 2 , 3 , 4 , 5 , 6 , 7]

console.log(num[0]);
console.log(num[1]);

for (val of num){
  console.log(val);
}