// Ques - 1 Time Format
var newday = new Date();
var date_1 = "Today's Date:" + newday.getDate() + "/" +(newday.getMonth()+1)+"/"+newday.getFullYear();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var date_2 = "Today's Day : "+days[newday.getDay()];
document.write(date_1);
document.write("<br>"+date_2);

//Ques -2 
document.body.style.backgroundColor='aqua';
document.body.style.margin="250px 0px 0px 635px";
document.body.style.fontSize="25px";
document.body.style.fontWeight="40px";
document.body.style.color="red";

var name = window.prompt("Please enter your name");
document.write("<br>"+ "My name is: "+ name);

//Ques-3
var one=parseInt(window.prompt("Please enter number 1: "));
var two=parseInt(window.prompt("Please enter number 2: "));
var addition=one+two;
var subtraction=one-two;
var multiplication=one*two;
var division=one/two;
document.write("<br>"+ " <b> Addition is :  <b>"+addition);
document.write("<br>"+ " <b> Subtraction is : <b>"+subtraction);
document.write("<br>"+ " <b> Multiplication is : <b>"+multiplication);
document.write("<br>"+ " <b> Division is :  <b>"+division);

//Ques-4
// node Assgn6.js
document.write("<br>"+"To Execute JS code inside the Editor"+"<br>"+ "the Command is : node Assgn6.js");