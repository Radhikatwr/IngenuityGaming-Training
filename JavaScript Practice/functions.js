function myFunction1()
{
    console.log("This is function ");
    console.log("it will perform some tasks");
}
myFunction1();

//Function with arguments and without return

function myFunction2(a,b)
{
    console.log("Function with data");
    console.log("Result="+(a+b));
}
myFunction2(5,10);

//Functions with arguments and return

function myFunction3(a,b)
{
    return a+b;
}
var result=myFunction3(10,20);
console.log("Result= "+result);
console.log("answer= "+ myFunction3(30,25));


function sayHi(message)
{
    if(message)
    return message;
    else
    return "No data found";
}
console.log(sayHi("Hello"));
console.log(sayHi());

function addFunction4(a,b)
{
    if(b==undefined)
    {
        b=0;
    }
    return a+b;
}
console.log("Sum of numbers : "+addFunction4(5,23));
console.log("Sum of numbers : "+addFunction4(5));

function addFunction5()
{
     console.log(arguments.length);
}
addFunction5(1,2,3);

//Function using Constructor

var myFunction4 = new Function("a","b", "return a+b");
console.log("Function using constructor" + myFunction4(5,7)); 

//FUNCTION EXPRESSION : storing functions definition inside a variable is called functions expression also known as anonymous function (fuction doesn't have a identifier)
var a=function()
{
    console.log("This is function expression");
    return "Hey Guys";
};
console.log(a());

//Self-Invoking Function
(function()
{
    console.log("This is an anonymous function and its get called itslef");
}
)();

// //Function Hoisting
// // sayHii(5,10);
// // function sayHii(a,b)
// // {
// //     console.log("Result= "+ (a+b));
// // }

// Add(5,10);

//Block scope
function Scope1(){
{
    var a=10;
    console.log(a);
}
console.log(a);
}
console.log(a);


//reference of add
function add(a,b)
{
    return a+b;
}
var sum = add;
console.log(sum(5,20));
console.log(add(5,20));

//
function avg(a,b,sum)
{
    return sum(a,b)/2;
}
function add(a,b)
{
    return a+b;
}
var sum=add;
var result=avg(5,10,sum);
console.log("Final Result= "+result);

// CLASS AND PERSON
function Person()
{
    this.name="Radhika";
    this.surname="Tiwari";
    this.details=function()
    {
        return "Name= " + this.name + "Suraname= " + this.surname;
    };
}
var obj1=new Person();
console.log(obj1.name);
console.log(obj1.details());
