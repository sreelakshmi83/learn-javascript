
/////////////////////////////////////////////////////////////////////////////////
// functions
////////////////////////////////////////////////////////////////////////////////

//function is a piece of code which can be reused in our code again againin the code//
/*
function logger()
{
  console.log("I am sree");
}

// invoking  thefunction, calling the function, running the function
logger();
logger();
logger();
*/



//////////////////////////////////////////////////////////////////////////
// In function we can pass the data and recieve tha the data//
/*
function fruitprocessor(apples,oranges) //apples and oranges are called parameters or arguments
{
const juice=` juice with ${apples} apples and ${oranges} oranges`;
return juice           //
}
 const appleorangejuice=fruitprocessor(6,6); // we are passing the arguments(ie.,6,6)
 console.log(appleorangejuice);

 const applejuice=fruitprocessor(6,0);
 console.log(applejuice);               // we can call function many times as we want by passing different inputs into it//
console.log(fruitprocessor(6,6));

// console.log(), Number() are functions but inbuilt functions 

const num=Number(`23`);
console.log(num);
*/

////////////////////////////////////////
//function declartion
///////////////////////////////////////
/*
function calcAge1(birthYear) // birthyear is a parameter. it is a kind of placeholder in the function.//
{
  return 2037-birthYear;
}
const age8= calcAge1(1991) // 1991 is a argument is the actual value that we use to fill in that placeholehoder(birthyear)//
console.log(age8);
*/


///////////////////////////////////////////////

// function expression
///////////////////////////////////////////////
/*
const calcAge2=function(birthYear){ // function without a name which is also called anonymous function.so we call it as an expression and expression produces a value and value is stored in calcAge2 and ten it will a function.//
return 2037-birthYear;
}
const age9=calcAge2(1991);
console.log(age9);
// function is just as  a value like boolean, string and not as a numbertype . it is referred as value so we can store it in a variable//
//difference between function declaration and function expression//

//we can call a function declartions  before  they are defined in a code//
// above eg is rewritten
/*
const age10=calcAge1(1991); // calling a function
function calcAge1(birthYear){// writing a code
  return 2037-birthYear;
}
console.log(age10)

// but this not possible in function expression ie., we cannot call a function first and write code afterwards beacuse intenally this happens beacuse of the process called hoisting//
 //i prefer to use function expression because it gives a nice structure where i //have to define all the functions first at the top of the code  and then only i can call them. 

*/



 ////////////////////////////////////////////////////////////////////
 // ARROW FUNCTION
 ///////////////////////////////////////////////////////////////////
 //  Arrow function is the third function that was added to es6 

 //arrow function is shorter and faster to write
/*
const calcAge3=birthYear=>2037-birthYear ;  // we want birthyear becuase we want to calculate the ageso write arrow function and simply write what we want to return(here it is 2037-birthyear)//
   const age11= calcAge3(2000)   ;    
   console.log(age11);                // store value in a variable called calcAge3 same asfunctionexpression(also stores value in a variable called calcAge2)//
      
                                     //advantages:1)no need to write curly braces to define the code block
                                      // 2) return keyword is not written because value that we calculated  automatically(2037-2000) without using the return keyword
                                      // 3)is useful for one liner functions ie., one line function  with one parameter(birthyear)eg:calcage3
*/


/*
 const yearsUntilRetirement=birthYear=>{
 const age12=2037-birthYear;
 const retirement=65-age12;   
 return retirement;           // it is more complex when we add more parameters
  }                          // let us calculate how many years are left until retirement                                 // retirement age is 65 in european countries
console.log(yearsUntilRetirement(2000) );
*/


/*
const yearsUntilRetirement1=(birthYear1,firstName3 )=>{
  const age13=2037-birthYear1;                        //if have more lines of code then we should write return keyword//
  const retirement1=65-age13;
  return`${firstName3} retires in ${retirement1} years`;
}
console.log(yearsUntilRetirement1(1992,`sree`));
console.log(yearsUntilRetirement1(2000,`lakshmi`));
*/

//calling one function from inside the other function
/*function cutpieces(fruit)
{
  return fruit*4;
}

function fruitprocessor1( apples,oranges)
{
   const applepieces=cutpieces(apples);
   const orangepieces=cutpieces(oranges);
   const juice=`juice with ${applepieces}  pieces with apple and ${orangepieces} pieces with orange`;
   return juice;
}
console.log(fruitprocessor1(2,3));
*/


