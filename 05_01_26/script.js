/* Ternary Operator */

{
  let isLoggedIn = true;

  if(isLoggedIn == true){
    console.log("Welcome User!");
  }else{
    console.log("Please Login now!");
  }

  isLoggedIn ? console.log("Welcome User!"):console.log("Please Login now!");
}

// Typeof Operator

{
  let num = 10;
  let str = "Hello"
  let bool = true
  let undef = undefined

  console.log(typeof num);
  console.log(typeof str);
  console.log(typeof bool);
  console.log(typeof undef);
}

// String Operator (+)

{
  let str1 = "Hello";
  let str2 = "World";

  console.log(str1 + " " + str2);
}

// String with Methemetical Calculation

{
  let a = "10"
  let b = 20

  console.log(a + b);
}

{
  console.log(10 + "20" + 20);
  console.log(10 + 10 + "20" + 20);
  console.log(10 + 10 + "20" + 20 * 10);
  console.log(10 + 10 + "20" + 20 * 10 + 20);
  console.log(10 + 10 + "20" + 20 * 10 + 20 + 20);
  console.log(10 + 10 * 10 + "20" + 20 * 10 + 20 + 20);
  console.log((10 + 10) * 10 + ("20" + 20) * 10 + (20 + 20));
  console.log((10 + 10) * 10 + ("20") + (20 * 10) + (20 + 20) + "20");

  // 20 * 10 + 20200 + 40

  // 200 + 20200 + 40

  // 20440

  // 200202004020
}

// Javascript statements

/*

if......statement
if....else...statement
if....else...if...statement
nested statement
continue statement
break statement
switch case statement

*/


{
    let subject = "biology"

    if(subject == "chemistry"){
      console.log("chemistry book are available!");
    }else if(subject =="English"){
      console.log("English book are available!");
    }else if(subject == "Biology"){
      console.log("Biology book are available!");
    }else if(subject == "Drawing"){
      console.log("Drawing book are available!");
    }else if(subject == "Phycology"){
      console.log("Pychology book are available!");
    }else{
      console.log("book are not available!");
    }
    
}

{
  // switch case statement

  let marks = 45

  switch(true){
    case marks >= 90:console.log("A+");
    break
    case marks >= 80:console.log("A");
    break
    case marks >= 70:console.log("B+");
    break
    case marks >= 60:console.log("B");
    break
    case marks >= 50:console.log("C+");
    break
    case marks > 40:console.log("C");
    break
    case marks < 40:console.log("Fail");
    break
    default:console.log("Please choose right marks!");    
  }
}