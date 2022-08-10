let sum=0;
while(true)
{
    let number = parseInt(prompt("Enter a number",10));
    if(number<0)
    break;
    sum=sum+number;
}
document.getElementById("demo").innerHTML= "The sum of previous numbers is :"+sum;
                                                                           