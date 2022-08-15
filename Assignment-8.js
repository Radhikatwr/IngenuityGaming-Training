function myfunction()
{
    alert("Write code to remove extra white space in between the string");
    let string = prompt("Enter any string with extra spaces");
    alert("Answer : "+string.trim());
}
function myfunction2() {
    alert("Write a code to Copy an array into another using forEach()");
    var number=prompt("Enter element separated by space");
    let ans =number.split(" ");
    let res=[];
    ans.forEach(myCopy);
    function myCopy(item){
        res.push(item);
    }
    alert("Your String : "+ ans + " Copy Array : " + res );
}

