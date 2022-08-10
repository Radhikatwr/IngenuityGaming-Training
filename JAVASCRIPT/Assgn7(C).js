var info=
{
    name:"Radhika Tiwari",
    age:20,
    Address:{City:"Agra",State:"Uttar Pradesh",Pincode:"282001"},
    Hobbies:["Dancing","Playing Badminton","Carrom."],
    information:function(){
        return this.name + " of age "+  this.age + " from "+ this.Address.City + " likes to do " + this.Hobbies;
    },
};
document.write(info.information());