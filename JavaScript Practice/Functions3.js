var obj = {
    firstname : "Sachin",
    lastname : "Yadav",
    fullname: function()
    {
        return this.firstname + " " + this.lastname;
    },
};
console.log(obj.fullname());

var person ={
    fullname: function(city,country)
    {
        return this.firstname + " " + this.lastname + " " + this.city + " " + this.country;
    },
};
 //Apply method to reuse a method available in other objects

 var person2 ={
    firstname:"Radhika",
    lastname:"Tiwari",
 };
 console.log(person.fullname.apply(person2,["Delhi","India"]));

 //ESS based Function

 var add = function(a,b)
 {
    return a+b;
 };
 console.log(add(10,10));

 //ESS fat arrow function

 var add = (a,b)=> a+b; //short syntax
 console.log(add(5,15));

 //foreach using arrow function
 var myArr=[1,2,3,5,7];
 myArr.forEach((a) => console.log(a*10));

//map function

var myarrr = [13,5,7,9,10];
var myarrr = myarrr.map((i)=>i*10);
console.log(myarrr);

//filter method

var ages = [32,51,14,21];
var result = ages.filter(filterAge);
function filterAge(age)
{
    return age >18;
}
console.log(result);

//scheduling function
//set time out = call function after particular time

setTimeout(callback , 3000);
function callback()
{
    console.log("Hey Guys!");
}

//set time interval

var myinterval=setInterval(callback,2000);
clearInterval(myinterval);
