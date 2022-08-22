function myFunction1()
{
    alert("Write a Program to use call() and apply() Method.");
    let person = {
        Name:"Radhika",
        Surname:"Tiwari",

    };
    const details = {
        address: function (city,country)
        {
            return (this.Name + " " + this.Surname + " belongs to " + city + " from " + country

            );
        },
    };
    alert("Example of call() function");
    let city = prompt ("Enter the city where you think she " + person.Name + " lives" );
    let country = prompt("Enter the country name where this city belongs");
    alert(details.address.call(person,city,country));
    alert("Example of Apply() function");
    let string = details.address.apply(person,[city,country]);
    alert(details.address.apply(person,[city,country]));
}

function myFunction2()
{
    var numbers = [8,27,64,125,216];  
    var newNumbers = numbers.map((i)=>Math.cbrt(i));
    alert("Given Array : " + numbers);
    alert("Cube roots of given Array : " + newNumbers);
}

function myFunction3()
{
   var i=0;
   var myFunc = setInterval(()=>{
    document.write("Hello everyone!! " + "<br>")
    i++;
    if(i==5)
    {
        clearInterval(myFunc)
    }
   },3000);
   
}

function myFunction4()
{
    var people = [
        { name: "Ashish", age: 23 },
        { name: "Ajay", age: 21 },
        { name: "Arvind", age: 26 },
        { name: "Mahesh", age: 28 },
        { name: "Jay", age: 19 }
      ];
      const peoplenew = people.map((peopleItem) => {
        return peopleItem.name+ " is "+peopleItem.age+ " year old\n";
      });
      alert("Iterated Array of objects using map functions\n"+peoplenew);
}

function myFunction5()
{
    var people = [
        { name: "Ashish", age: 23 },
        { name: "Ajay", age: 21 },
        { name: "Arvind", age: 26 },
        { name: "Mahesh", age: 28 },
        { name: "Jay", age: 19 }
      ];

      const ans = people.filter(function(peopleAge){
        return peopleAge.age<25;
      });
      alert("People whose age is less than 25 are : \n"+JSON.stringify(ans))
}