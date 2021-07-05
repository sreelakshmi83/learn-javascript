
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

// arrays
//////////////////////////////////////////////////////////////////////////////////////////
/* Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined.
 Objects such as functions and arrays are referred to as non-primitive values. The fundamental difference between
  primitives and non-primitives is that primitives are immutable and non-primitives are mutable*/
/*
  const friend1=`Michael`; 
  const friend2=`Steven`;
  const friend3=`Peter`;

 
  const friends=[ `Michael`, `Steven`,`Peter`]; // 1st way  we used only[]( squarebrackets) which is called literal syntax//
  console.log(friends);

  const years=new Array(1991,1998,2000,2009); // array ia function and without 'new' this  array function will not work//
                                               // we have created array and we have put some values into it.ie.,1991,and son on//
                                               
    console.log(friends[0]) ;
                             // array is a elemnt based  ie., zerobased. ie., it starts[0][1]// now we need to retrieve them that is also done with square brackets//
    console.log(friends[1]) ;

  console.log(friends.length); // gives the number of elements in the array//
   console.log(friends[friends.length-1]) ; // to retrieve the element from the array we use [].to get the index of the last element write friends.length-1//               
                                             // in this[]  we can write a number, and also the expression(friends.length-1) which produces a value//
 
    friends[1] =`Jay` ;
    console.log(friends) ;   
                                     // change and add to the array
     //friends=[`sam``bob`]   ;      //cannot cahnge the array like this we get erroe

    friends[0]=`Sam`;              // we can change individually //     
    friends[1]=`Bob`;
    friends[2]=`Alice`;
    console.log(friends);
    console.log(friends);
 
    */


   /////////////////////////////////////////////////////////////////////////////////////
    // array can hold different types of data
    ////////////////////////////////////////////////////////////////////////////////////
    /*
    const firstName6=`sree` ;
    const sree6=[firstName6,`laskhmi`,2037-1991,`teacher` ,`singer`,friends];
    console.log(sree6);
    console.log(sree.length);

    // excercise
 --------------------------
    const calcAge=function(birthYear){
      return 2037-birthYear;
    }
    const y1=[1990,1967,2002,2018];// yis referred as years//

    //console.log(calcAge(years));//u cannot claculate the age like this 2037-birthyearie., it cannot subtract whole array minus 2037//
                                  // so this statement doesnot work but gives a error//
                                  //so we can calcAge individually like below and store the value in a variable
                                   called age1 and so on..//
    const age14=calcAge(years[0]);  //this is an expression which produces a value.
    const age15=calcAge(years[years.length-1]);
    console.log(age14,age15);
 
    const new1= [calcAge(years[0]),calcAge(years[years.length-1])]
    console.log(new1);
*/
    ////////////////////////////////////////////////////////////////////////////////////
    // basic array methods
    ///////////////////////////////////////////////////////////////////////////////////
    /*

    const f=[`Michael`,`Steven`,`Sree`, `Lakshmi`]; // f is referred as friends//
    console.log(f);
   ----------------------------------------------
    // add elements
    --------------------------------------------
    const newlength=f.push(`sai`); // push method adds elements at the end of the array//
    console.log(newlength);
    console.log(f);

    f.unshift(`sita`); // unshift method will add elements at the beginning of the array//
    console.log(f);


    ---------------------------------------------
    // remove elements//
    ----------------------------------------------


      f.pop(); // removes the last element(sai) in the array no need to mention the name of the last element because it not useful to us//
     const popped=f.pop();// now last element is lakshmi it is removed  from the arrayand displays the lakshmi in the console//
     console.log(popped); 
     console.log(f);// if we want to see the name of the last element then we should store the value in a variable(eg:here it is popped)//

     f.shift();
     console.log(f); // firat elemnt in the arry is removed//



/////////////////////////////////////////////////////////////////////////////////////////////////////
     // there is a very useful method that tells usin which position a certain element is in the array.
     ////////////////////////////////////////////////////////////////////////////////////////////////
     
     console.log(f.indexOf(`Sree`)); // it in the 2 position a[2]//
     console.log(f.indexOf(`Michael`)); // it is in 0 position a[0]//
     console.log(f.indexOf(`bob`)); // we have not written the bob in the array so it gives as -1 .a[-1]//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // es6 has introduced one more method called "includes".if there is an element in the array it returns" true" otherwise "false"//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log(f.includes(`Sree`));
    console.log(f.includes(`bob`));
    f.push(23);                     // adding  number 23 to the array
    console.log(f.includes(`23`));// includes does a strict equality. here 23 is a string because we have written in quotation marks.
                                  // number 23 is not equal to string 23 . so gives us false//
    console.log(f.includes(23));    // number 23 is equal to number 23 . so it gives us true//

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // is used to check conditionals also
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(f.includes(`Sree`))    // it refers to aboolean value if it is true it will execute otherwise it shows nothing in the console//
    {
      console.log("you have a great friend Sree");
    }

    const ages=[calcAge(years[0]),calcAge(years[years.length-1])]
    
    // we creating an array so that the result is stored as an array//



