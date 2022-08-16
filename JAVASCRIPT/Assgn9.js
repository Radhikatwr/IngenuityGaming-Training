function myFunction4()
{
    alert("Write a JavaScript program to create a new string adding New! in front of a given String. If the given string begins with New! already then return the original string. ");
    let string=prompt("Enter a String");
    let ans=string.startsWith("New");
    if(ans!=true)
    {
        alert("New!" + string);
    }
    else
    {
        alert(string);
    }
}



function myFunction5()
{
    alert(" Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned");
    let string=prompt("Enter a string");
    
    let ans = combinestring(string);
    function combinestring(text)
    {
        let first_part = text.substring(0,3);
        let last_part = text.substring(text.length,text.length-3);
        return(first_part+last_part);
    }
    alert(ans);
}

function myFunction3()
{
    alert("Write a code to return entire function definition and display it.");
    function add(a,b)
    {
        let sum=a+b;
        return add;
    }
    alert(add());
}

function myFunction2()
{
    alert("Write a Program to return more than one value from a Function.");
    function entername()
    {
        let first_name = prompt("Enter your name : ")
        let surname = prompt("Enter your surname : ")
        return {first_name,surname};
    }
    let name = entername();
    alert("Hello " + name.first_name + " " + name.surname + " Hope you're doing well!! " );
}

function myFunction1()
{
    function add() {
        let sum=0;
        while(true)
        {
            const num=parseInt(prompt("Enter your digit : "));
            if(num>0)
            {
                sum+=num;
            }
            else
            {
                break;
            }
        }
        return sum;
    }
   
    alert("Your sum is " + add());
}