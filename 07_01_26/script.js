/* Break and Continue Statements in Loops */

// Using 'break' to exit a loop early   

outer:for(let i = 0; i < 10; i++){
  console.log("Loop I: " , i);
  for(let j = 0; j < 5; j++){
    if(i == 5){
      break;
    }
    console.log("Loop J : " , j);
  }
}

outer:for(let i = 0; i < 10; i++){
  console.log("Loop I: " , i);
  for(let j = 0; j < 5; j++){
    if(i == 5){
      break outer;
    }
    console.log("Loop J : " , j);
  }
}

// Javascript Basic Functions / Arrow Function (ES6)

{

  function sum(){
    return console.log("Hello World!!");
  }
  
  sum()

}

// Arrow Functions

{
  
  const multi = () => {
    console.log(10 * 20);
  }
  
  multi()
}
{

  const multi = (a , b) => console.log(a * b);
  
  multi(10 , 20)
}

// IIFE function

// immidiately Invoked function expression

(function add(){
  console.log("Hello Javascript");
})()


// callback function

function a(callback){
  console.log("Function A called...")
  callback()
}

a(b)

function b(){
  console.log("Function B called...");
}