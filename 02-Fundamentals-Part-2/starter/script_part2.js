
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
const calcAge2=function(birthYear){ // function without a name which is also called anonymous function.so we call it as an expression and expression produces a value and value is stored in calcAge2 and then it will a function.//
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

// but this not possible in function expression ie., we cannot call a function first and write code afterwards beacuse internally this happens beacuse of the process called hoisting//
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
///////////////////////////////////
//Reviewing functions
/*
const calcAge=function (birthYear)
{
  return 2040-birthYear;
}
const yearsUntilRetirement =function (birthYear,firstName)
{
  const age1=calcAge(birthYear);
  const retirement=65-age1; 
  
if(retirement>0)
{
  console.log(`${firstName}  retires in ${retirement} years`);
 return retirement;
}
 else {
   console.log(`${firstName} has already retired🎉`);
  return -1;
 }
}
console.log(yearsUntilRetirement(1991,'sree'));
console.log(yearsUntilRetirement(1945,'lakshmi'));

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

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill
 value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated
 based on the rules above (you can check out the code from first tip calculator challenge if you 
  need to). Use the
  function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value 
of a function! So you can just call a function as array values (so don't store the tip values in separate variables
 first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const calcTip =function(bill){
return  bill >=50 && bill<=300 ? bill*0.15 : bill*0.2;
}
const bills= [125, 555,44];
const tips=  [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[1])];
const totals= [bills[0]+tips[0], bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills, tips, totals);
*/

///////////////////////////////////////////////
/*Introduction of Objects*/
/*
const sreeArray=[            // i want to refer 'sree' aas firstname, lakshmi as 'lastname' and so but this is not possible in array//
  'sree',                      //but we can refer them onlu by their ordernumber in which they appear in the array//
  'lakshmi',                   // to solve this problem we use another datastructure called 'OBJECTS'//       
  2040-2000,
  'teacher',                   // arrays are used for more ordered data
  ['John','Peter','Mary']         //the order in which we specify the elements matters a lot//because that's how we access these elements
];
console.log(sreeArray);

const sree={
  firstName:'sree',             // objects are used for unstructured data
  lastName : 'lakshmi',          // we use {} is called object literal syntax. because we are literally writing down the entire object content in the in the curly braces.//
                                  //  order doesnot matter //
  age:2040-2000 ,                   // we define using (key/property) and valuepair: for eg: key is firstnameand value: sree//
job:'teacher',                      // in console the keyand values are displayed in the alphabetical order.//
friends:['John', 'Peter','Mary'],
};
console.log(sree);
*/

///////////////////////////////////////////////////
//Dot VS Bracket Notation//
/*
const sree={
  firstName: 'sree',
  lastName: 'lakshmi',
  age:2040-2000,
  job:'technician',
  friends:['Mary','Rosy','Lilly']
};

console.log(sree);
console.log(sree.lastName);// dot is an operator which goes to object(sree)and retrieve the property(lastname) from it//
console.log(sree['lastName']);// retrieve from an array .writing property/key with inn quotation marks//

const nameKey='Name';
console.log(sree['first'+nameKey]) ; //  in firstName and lastName ,Name is repeating twice so we can store that Name separetely in another variable and use it later//
console.log(sree['last'+nameKey]); //   in this we have cpmputed firstname and last name so we use bracket notaion.otherwise wecan use dot notation.//

// example for  bracketnotation//
//that we don't know yet which property we want to show,and instead we get this information from some user interface//
const interestedIn = prompt('What do you want to know about Sree? Choose between firstName,lastName,job, age, friends');
                        // with prompt(inbuilt function) it will create a pop up window with input field// 
                        // this function will return a string so we are  storing in the variable called interestedIn//
//console.log(sree.interestedIn); // if 'user chooses job in the input field he gets 'undefined'(error) beacuse we are trying to access th property(interstedIn)on an object(sree) which doesnot exist//
// so dot notation doesnot work here//

console.log(sree[interestedIn]); //here javascript will replace the 'interestedIn' with the actualvalue(job)of the variable and then 'job' will be looked upon the object 'sree'.//
                                 // now result be: technician//
                                 // this way we retrieve the properties (joband so on)from the object(here it is sree)

 if(sree[interestedIn]) {  // when user pass another value which is not in the popwindow eg:location.
  console.log(sree[interestedIn]);// then we use if condition//
}   else{
  console.log('wrong request!Choose between firstName,lastName,job, age, friends');
}                             

// add properties to the object using both dot and bracket//
sree.location ='Sweden';
sree['twitter'] = '@sree';
console.log(sree);

// Challenge
// "sree has 3 friends, and her best friend is called Mary"

console.log(`${sree.firstName} has ${sree.friends.length} friends, and her best friend is called ${sree.friends[0]}`);

*/
/////////////////////////////////7
//object methods

// objects can hold different types of values, can hold objects inside objects.
// function is just another type of a value. if function is a value then we can create a key pair value.in which function is a value.
// that means we can addd functions to objects.
/*
const sree={
  firstName :'sree',
  lastName: 'lakshmi',
  birthYear:1991,
  job:'teacher',                    // we have string value//
  friends:['Mary','Rosy','Lilly'], // we have array value//
  hasDriverlicense :true ,    
        // we have boolean value//
        */ 
 /*                            
calcAge:function(birthYear) // it is just like function expression.but syntax is different. becausenow calcAge is not a regular variable but it is a (key7property)of an object(sree)
{                           // function is specified as an expression bcos expression produces value
  return 2040-birthYear;    // any function attached to the object is called method.//
}
} ;
console.log(sree.calcAge(1991));// calacAge is a function value . to call (function) it we use parenthesis. and we pass value (1991).so that should then calculate our age.//
                                // to unlock the result we use console.log// 
console.log(sree['calcAge'](1991));
*/

/* now using (this)*/

/*calcAge:function(){
 /* console.log(this); /*this is a keyword  that points (act as)to the object(sree)and it will print completesreeobject*/
/* return 2040 - this.birthYear;/*this(nothing but (sree)object will take only birthyear from the (sree)object and subtract it from 2040*/
/*}*/
/*};*/
/*console.log(sree.calcAge());/*sree is an object and calling the method calledcalcAge()*/
/*console.log(sree.calcAge());/*i am calling function calcAge the 4 times.each time it is calculating the age .here computation is done many times and takes much time
so to solve this  .what we do is calculate age once and store it in a objectand wheneverwe need it just retrieve the age as a property from the object*/  

/*console.log(sree.calcAge()); */
/*console.log(sree.calcAge());*/
/*the above code is can be rewritten like_*/

const sree ={
  firstName :'sree',
  lastName: 'lakshmi',
  birthYear:1991,
  job:'teacher',                    // we have string value//
  friends:['Mary','Rosy','Lilly'], // we have array value//
  hasDriverLicense :false ,          // we have boolean value// 
                        
 calcAge:function() {
  this.age= 2040 - this.birthYear;// we are storing (2040-this.birthyear)value in this.age is object(this refers to sree.age).//
  return this.age                 // should not put semicolon after return statement//
},

getSummary:function(){              //this refers to object(sree)and we can call the function also and now we are deciding whether she has driverslicense or not using the ternaryoperator.a(true)no(false)//
  
  return `${this.firstName} is a ${this.calcAge()}old ${this.job} and she has ${this.hasDriverLicense ? 'a' : 'no' } driver's License `
}
};
console.log(sree.calcAge());
console.log(sree.age);
console.log(sree.age);

//challenge 
// "sree is a 46 year old teacher and  she has  a driver's license".

console.log(sree.getSummary());


//////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
 Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property,
 and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3)
 is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark={
  fullName:'Mark Miller',
  mass: 78,
  height:1.69,
  calcBMI:function()
  {
   this.BMI= this. mass/ this.height**2;
    return this.BMI
  }
};
console.log(mark.calcBMI());
console.log(mark.BMI);

const john={
  fullName:'John Smith',
  mass:92,
  height:1.95,
  calcBMI:function()
  {
    this.BMI=this.mass/this.height**2;
    return this.BMI
  }
};
console.log(john.calcBMI());
console.log(john.BMI);
if(mark.BMI>john.BMI)
{
  console.log(`${mark.fullName} 's BMI( ${mark.BMI}) is  higher than ${john.fullName}'s BMI(${john.BMI}) `);

}else if(john.BMI>mark.BMI){
console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s  BMI(${mark.BMI})`);
}
*/
//compute the value means  calculate the value//
// Iteration for loops
/*
console.log('lifting weights iteration 1');
console.log('lifting weights  iteration 2');
console.log('lifting weights iteration 3');
console.log('lifting weights iteration 4');
console.log('lifting weights iteration 5');
console.log('lifting weights iteration 6');
console.log('lifting weights iteration 7');
console.log('lifting weights iteration 8');
console.log('lifting weights iteration 9');
console.log('lifting weights iteration 10');
*/
//instead of writing the code so many times we use for loop//
// for loop will run the code over and over again//
/*
for(let rep=1; rep <=10; rep++)
{
  console.log(`lifting weights iteration rep 1`); // this code is displayed 10 times//
}

for (let rep=1; rep<=10; rep++) // rep is a normal variable that is available inside the code block //
{                               // so transform to template string ${} so we can insert variable(rep) inside the string

  console.log(`lifting weights iteration ${rep}`);// this loop keeps running until the condition ie., (rep <=10) is true//
}

*/
/*
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log( myObject.fullName()); 
*/
/*
const sreeArray =[
'sree',
'lakshmi',
2040-1991,
'teacher',
['Michael','Steven','Mary'] // i want print these elements individually so using for loop//
];
const types=[];
                                 //reading the elements from the array//
for (let i = 0;i<5 ; i++) {     // starting with 0 bcos array is zero basedie.,a[0]//
                              // we are writing i<5 that we are giving value ourselves that that the value should print till 5//
  console.log(sreeArray[i]); // since e want to print(log)all te elements in te console we need to updatethe counter ie.,i++//
  
}
for(let i=0; i < sreeArray.length ; i++) // here i<sreeArray.length calculates the value from the javascript(javascript gives the total length of the array.if we add new element to the array then that is also printed)
{
  // reading from the sreeArray
  console.log(sreeArray[i],typeof sreeArray[i]);// we are countervariable 'i' so weretrive all the elements from the array//
// filling the types of an array//
  types[i] = (typeof sreeArray[i]);
types.push(typeof  sreeArray[i]);// this statement adds new element at the end of the array
}
console.log(types);

const  years=[1991,2007,1969,2020]
const ages=[];// creating empty array to store the results//
for(i=0; i<years.length;i++)
{
 ages.push( 2040-years[i] );//  'i' is a current loop position(i.e.,starting from i[0]to till end (here it is i[3])) and we want add the result to the above empty array.//
                // so we are using the push method.2040-1991(i[0]value),2040-2007(i[1]value),2040-1969(i[2]value),20140-2020(i[3]value)//
}
console.log(ages);
// continue and the break statements//

// continue will terminate from the current iteration
// break will completely terminate the whole loop
//--------------prints only strings-------------
for(i=0;i <sreeArray.length; i++)
{
  if (typeof sreeArray[i]!='string')continue;
  console.log(sreeArray[i], typeof sreeArray[i]);
}
console.log(`-----------break with number------------`);
for(i=0;i <sreeArray.length;i++) {               //const sreeArray =['sree','laskhmi',2040-1991,'teacher',['Michael','Steven','Mary']};
 if (typeof sreeArray[i]!='string') break; // in this it will print(output) sree,lakshmi and third is number(2040-1991) so it will come out of loop completely even though we have string i.e., teacher it will not print.becos we are using the break satement//  
 console.log(sreeArray[i], typeof sreeArray[i]) ;
};
*/
  /*                                                  
//or the above code is written like this
console.log(sreeArray[0]);
console.log(sreeArray[1]);
console.log(sreeArray[2]);
console.log(sreeArray[3]);   // we are writing 5 times bcos there are 5 elements in an array and want to print in the console.//
console.log(sreeArray[4]);   // so to avoid  writing this  long code simply we are using the for loop//
console.log(sreeArray[5]);
*/
/*
console.log(`--------------looping backwards------------------`);
const sreeArray1=['sree','lakshmi',2040-1991,'teacher',['Michael','Mary','Rosy']];
for (i=sreeArray1.length-1; i>=0;i--){ //( i=5-1=4; 4>=0;  (4--)4-1=3  so this continues until condition is true(0>=0))//
console.log(i, sreeArray1[i]); // 'i' is a countervariable.i.e.,i=0,i=1and so on . it will print from last element to first element and also with serialnumbers//
}

*/

////////////////
//while loop
/*
let rep=1;
while(rep<=10)
{
  console.log(`while:lifting weights reptition${rep}`);
rep++;
}
*/
/*
let dice = Math.random()*6; // this gives decimal values
console.log(dice);
*/
 let dice= Math.trunc(Math.random()*6)+1; // math.trunc will remove the decimal value.
 console.log(dice);
 while(dice!==6) { // rolled number is different from 6
   console.log(`you rolled the dice${dice}`);// this produces the infinite loop so to stop this we are writing the next line//
 dice =Math.trunc(Math.random()*6)+1; // created new random number 
if (dice ===6) console.log(`loop is about to end.....`);
}
//note: whenever we dont know  beforehand how many iterations will have then in that situtation we can use----- 'whileloop'----//
// these are examples//
/*function getArea(length,width)
{
  
  return `Area of a rectangle is ${length*width}`;
}
 const area=getArea(5,4);
 console.log(area); */

/*
 function getArea(length,width){
   let area= length*width;
   return area;
 }
const area=getArea(5,5);
console.log(`The Area of a rectangle is ${area} `);
 */
/*
function getPerimeter(length,width)
{
  let perimeter= 2*(length+width);
  return perimeter;
}
const perimeter= getPerimeter(9,9);
console.log(`perimeter of a rectangle ${perimeter}`);
*/
/*
function getPerimeter(length, width) {
  return ` the perimeter of a rectangle ${2*(length+width)}`;
}
const perimeter=getPerimeter(9,9);
console.log(perimeter);
*/

/*
function vowelsAndConsonants(s) {
  s = s.toLowerCase() 
  for (let i = 0; i < s.length; i++) {
      if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
          console.log(s[i]);
      }
  }
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] != 'a' || s[i] != 'e' || s[i] != 'i' || s[i] != 'o' || s[i] != 'u') {
          console.log(s[i]);
      }
  }
}

vowelsAndConsonants("javascriptloops")
*/
//challenge code#1
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
 ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points,
  according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage= (a,b,c)=> (a+b+c)/3;
  console.log(calcAverage(100, 900, 1000));

  //test1
let dolphins=calcAverage(44,23,71);
  console.log(dolphins);
  let koalas= calcAverage(65,54,49);
  console.log(koalas);

  const checkWinner=function(avgdolphins,avgkoalas){
    if(avgdolphins>=2*avgkoalas)
    {
      console.log(`dolphins win by (${avgdolphins} vs. ${avgkoalas})`);
    }else if (avgkoalas>=2*avgdolphins){
      console.log(`koalas win by (${avgkoalas} vs. ${avgdolphins})`);
    }else{
      console.log(`no team wins`);
    }
  }
    checkWinner(dolphins,koalas);
  checkWinner(576,111);

//test2
 dolphins = calcAverage(85,54,41);
 koalas=calcAverage(23,34,27);
 console.log(dolphins,koalas);
 checkWinner(dolphins,koalas);
*/





