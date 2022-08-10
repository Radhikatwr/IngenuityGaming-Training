let a = Math.floor(Math.random()*10+1);
let count=3;
document.getElementById("demo").innerHTML="THE ACTUAL NUMBER IS : "+ a;
alert("Hey! Let's play the game --> ")
while(count--> 0)
{
    let b= parseInt(prompt("Now Make a Guess of the number"),10);
    if(b==a)
    {
        alert("CONGRATULATIONS YOU WON!!");
        
    }
    else if(b>a)
    {
        alert("Buddy..Try guessing a smaller Number "+count+" Chance_left");
    }
    else
    {
        alert("Buddy.. Try guessing a greater Number" +count+" Chance_left");
    }

};
alert("BETTER LUCK NEXT TIME!!")