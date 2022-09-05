 export let message = "This is module concept";

export let display = (name)=>{
    return `${name}, welcome to ingenuity gaming ! `
};

export class Employee
{
    constructor(name, id, designation)
    {
        this.name = name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails()
    {
        console.log(`Employee Name: ${this.name}\nEmployee Id: ${this.id}\nEmployee Designation: ${this.designation}`);
    }
}