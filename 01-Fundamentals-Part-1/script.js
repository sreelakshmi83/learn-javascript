////////*linking a file*/////////
let js="amazing";
/*if (js="amazing") alert ("js is amazing");*/
  console.log("great js");

  console.log(2+3+4+5);

 /////////* values and variables*//////////

/*value is a piece of  data it is the most fundamental unit of information
that we have in programming;*/

console.log("sreelakshmi"); /*sreelakshmi,23 are values*/
console.log(23);

let firstName="sreelakshmitupakula"; /*firstname is called as a variable so that we can store value(sreelakshmi) in that firstname*/
                             /* and we can reuse the variable many times in the code*/



console.log(firstName);     /* it is very useful bcos if i want to change name i just have to change the first name and it displays  new name in all 3 console.log */ 
console.log(firstName);
console.log(firstName);

//////////*convention and rules*//////////

/*camel case notation iefirst letter should be in small letter and subsequent word should be in capital letter*/
/* eg: let 3years=3;*/
/* variable name cannot start with a number*/
/* variable should contain only letters ,numbers, underscores, and dollar sign*/

/* eg: let sree&lakshmi="sl";*/
let sree_lakshmi="sl";
console.log(sree_lakshmi);
let $function=90; /*cannot use reserved keywords as a variable name*/
console.log($function);          /* but can be used with dollarsign*/
let  person= "sreelakshmi";
console.log(person);
let PI = 3.1415 /* we should use uppercase for only constants.bcos constants will never change their value*/
 console.log(PI);
/* naming a variable should be easy to understand and we should know what value the variable is holding*/

let myFirstJob="programmer";
let currentJob="Teacher";

let Job1="programmer";
let job2="Teacher"; /*  variable names here job1 and job2 are confusing but myFirstJob and currentJob are very easy to understand*/

console.log(myFirstJob);


/*in overall a variable is a box and here it is  named as myFirstJob  and we can put any value in it (here it is programmer) and can reuse the variable in the code as many times as we want*/

// datatypes

let javascriptIsFun = true ;/*here variable javascriptIsFun)is holding the boolean value(true). wes hould remember that value holds the datatype(here boolean) and not variable*/
console.log(javascriptIsFun);

console.log(typeof true); // type of is used to show the value(ie.. it shows it is boolean)
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "sreelakshmi");// string should be written always in quotes

javascriptIsFun="Yes!";/*  here we are using dynamic typing. ie., first declared  let javascriptisfun=true(boolean) and secondly we are reusing the variable javascriptisfun ie.,javascriptisfun="yes"(this string).we shoyld not use let . that means we can change the variable value.this is called dynamic typing.*/
console.log(javascriptIsFun);

let year;              /* undefined means variable is not having value.ie.,empty value:*/

console.log(year);
console.log(typeof year);

year=1991;               /* used a dynamic typing ie.,we reused the variable year  so we suld not write the let.if new variable is created then we should write let in the beginning of the variable*/
console.log(year);

console.log( typeof null);/* null also holds empty value like undefined(holds the empty value)*/ 

let age=30;
   age=31;      /* when we mutate a variable we use let ie., age changed from 30 to 31(is called mutate variable*/
let job1;    /* let can be used to declare  a  variable(job)  whose value is empty ie., not declared like teacher and etc.. but later in programming  we will declare the variable job */

 const birthYear =1991;          /* const keyword is to declare a variable that is not going to change at any point in future(ie.,fixed forever)  */

//birthyear=1990; /* error we cannot resign as declared as const in the above statement*/



var job="programmer";
job="Teacher";   /*var is function scoped but let is  block scoped*/
console.log(job);
  
lastName="lakshmi";
console.log(lastName); /* not declared either let, const,var so it will not create a variable in the current so called scope  */
                       /* Instead javascript will create a property on the gobal object*/
                       
 //basic operators
 //math opeartors

const now=2037
 const ageSree=now-1991;       /* subtraction operator*/
 const ageLakshmi=now-2018;
console.log(ageSree,ageLakshmi);/*we can log multiple data (here it is agesree,agelakshmi) by using comma */

console.log(ageSree*2,ageSree/10, 2**3);//2**3 means 2 to the power of 3 =2*2*2*/

const firstName1="sree";
const lastName1="lakshmi";
console.log(firstName1+' '+lastName1); /*concatenation means adding two strings here firstname is replaced with sree and lastname is replaced with lakshmi. therefore the output sree lakshmi and '' gives space between firstname and lastname*/

console.log(typeof  firstName1);/* typeof  operator gives us type of value (here firstname is string) */

//assignment operators//

let x=10+5;//15
x+=10;//x=x+10 ;x=15+10=25;
x*=4;//x=x*4; x=25*4=100;
x++;//x=x+1; x=100+1=101;
x--;//x=x-1; x=101-1=100;
x--;//x=x-1; x=100-1=99;*/
console.log(x); // gives 99 as output

//comparision operators//

console.log(ageSree > ageLakshmi);//<,>,>=,<= gives a boolean value (ie., true or false)
console.log(ageLakshmi >= 20); /* testing lakshmi is 18 yearsie., fullage or not 
                               in real time we store these results in the variable */

const isFullAge=ageLakshmi >=18;/* we are storing the result in the variable called isFullAge(here it is true-boolean value)*/
console.log(isFullAge);
console.log(now-1991 > now-2018);


let x1,y;
x1=y=25-10-5; /* operator precedence is taken into account subtraction is done first and then =sign is taken into account next*/
console.log(x1,y); 


const averageAge=(ageSree+ageLakshmi)/2; /* calculating the average age */
console.log(ageSree, ageLakshmi, averageAge);

/*coding challenge#1*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const markweight=78;
const markheight=1.69;
const johnweight=92;
const johnheight=1.92;

const markBMI=78/1.69**2;
console.log(markBMI);
const johnBMI=92/1.95**2;
console.log(johnBMI);

const markhigherBMI=(markBMI>johnBMI);
console.log(markhigherBMI);

const markweight1=95;
const markheight1=1.88;
const johnweight1=85;
const johnheight1=1.76;

const markBMI1=95/(1.88*1.88);

const johnBMI1=85/(1.76*1.76);

const markhigherBMI1=(markBMI1>johnBMI1);
console.log( markBMI1, johnBMI1, markhigherBMI1);

//strings and template literals//

const firstName2='sreelakshmi'; 
const job3='teacher'; // we are creating the variables(,firstname, job,birthyear) about the person and then concatenating into a big string*/
const birthYear1=1991; //here we can miss the spaces , quotation marks and so on and diffficult to write the code so avoid this we use templae literals// 
const year1=2037;

const sree="  I'm  " + firstName2 +  ' is a ' + (year1-birthYear1)+ ' old '+ job3 ;
console.log(sree);

const sree1= `I'm ${firstName2} is a ${year1-birthYear1} old ${job3}!`;//backticks are used to write the template literal and variables(job3) are inserted in the string and they are replaced(as teacher). multiples pieces of code is assembles in a single string.//
console.log(sree1); // for eg: we use backticks so there is no need to worry about the quotation marks//
                    //we use dollar sign to insert the variable. ${} is called a placeholder//


  console.log(`use for regular string....`) ;
  console.log('string \n\
  multiplelines.....\n\
  slash n is used to display line in the next line....'); //to get ride of this \n\ we use backticks which is used to display the lines one after the other//
  
  console.log(`string ....
  good string.....
  not using slash n here `);


  //if-else

  const age3=19;
  const isOldEnough=age3>=18;// using th boolean value and only using if statement//
  if(isOldEnough){
    console.log(`sree can start driving license 🚗`);//windows+.0= emojis//
    }
    

    const age4= 15; // using if..else
    if(age4>=18)
    {
      console.log(`sree can start driving licence🚗`);
    } else{
      const yearsLeft = 18-age4;
      console.log(`sree is too young. wait for another  ${yearsLeft} years😊`);
    }
       
    
const birthYear4=1991; //using  console.log in the if block and else block//
if (birthYear4<=2000)
{

console.log(`he belongs to 20th century`);
}else
{
  console.log(`he belongs to 21 century`);
}
                      
const birthYear5= 2015;
let century;                    //using without  console.log in the if block and else block and declaring the console.log outside the blocks.//
if (birthYear5 <= 2000)   // whatever variable is declared inside the block is not acessible out side the block so we must declare the variable out the block//
{
  century=20;
}else
{
  century=21;
}
console.log(century);


///////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. 
The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
 Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
const massMark= 78;
const heightMark=1.69;
const massJohnweight=92;
const heightJohnheight=1.92;

const MarkBMI1=78/1.69**2;
console.log(MarkBMI1);
const JohnBMI1=92/1.95**2;
console.log(JohnBMI1);

if (MarkBMI1>JohnBMI1)
{
  console.log(`Mark's BMI (${MarkBMI1})  is higher than John's (${JohnBMI1})`);
} else{
  console.log(`John's BMI (${JohnBMI1})  is higher than Mark's (${MarkBMI1})`);
}


const massMark1=95;
const heightMark1=1.88;
const massJohn1=85;
const heightJohn1=1.76;

const markBMI2=95/(1.88*1.88);
console.log(markBMI2);
const johnBMI2=85/(1.76**2);
console.log(johnBMI2);
console.log (markBMI2,johnBMI2);

if(markBMI2> johnBMI2)
{
  console.log(`mark's BMI (${markBMI2}) is higher than john's (${johnBMI2})`);
} else{
  console.log(`john's BMI (${johnBMI2})  is higher than mark's ( ${markBMI2})` );
}



//Type conversion and Type coercion 
//typeconversion : we explicitly convert from one type to another.
//type coercion: javascript converts from to one type to another implicitly.
// type conversion
const inputYear='1991'; //1991 is a string bcos marked in quotation marks//

console.log(Number(inputYear),inputYear);// Number()function will convert string into a number ie., numbers which are written into string eg:'12'//

console.log(String(23),23);// String()Function will convert number into a string//

console.log(Number('sree')); //number()function will not convert the string(here it is 'sree') into number. it gives error called Nan- not anumber//
console.log(typeof Nan);

//type coercion

console.log('I am '+ 23 +' year old'); // 23 is converted into number automatically using coercion//
console.log('I am '+String(23)+ 'year old');// converting the number 23 into string manually using the String() function//
console.log('23'/2); // it supports subtraction,division, multiplication, greaterand so on. it will convert string to number and number to string when ever it wants.//

console.log('23'*2);// it doesnot support addition. it just concatenes the  strings and numbers. //
console.log('23'>24);
console.log('2'+'3'+2);
console.log('10'-'5');
console.log('2'+'4'+5);// output is 245 : 2 and 5 are strings can be added as 24 and 5 is number it is added as 245 
console.log(2+3+4+'5');// 95 : numbers are added and then string is added ie., 2+3+4=9 and 5 is added =95


//  falsy values: 0,null ,undefined,Nan,'' (emptystring)
// falsy values will becomefalse when we try to convert into a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('sree'));
console.log(Boolean({}));

//the conversion to boolean is always done  implicit or  we can say typed coercion that javascript does automatically behind the scenes.//
//javascript do typecoercion to booleans in 2 scenarios1) using logical operators//
//2)logical context for eg in the condition of if-else statement//

const money=0;
if (money){                // money in the if statement will convert 0 into the boolean(true or false) and execute the if -else statemnents//
console.log("don't spend money");
}else{
  console.log("get a job");
}
                  // we can also give value as 0 to height//
const  height=0; //here problem arises we have defined the height as 0 but ifstatment //
                // is trying to change the 0 to boolean valuein the ifstatment. 0 is a falsy value so it is executing the else part// 
if (height){                    // we can fix this problem using logical operator//
console.log('yay defined the height');
}else{
  console.log('height is not defined');
 }

 


