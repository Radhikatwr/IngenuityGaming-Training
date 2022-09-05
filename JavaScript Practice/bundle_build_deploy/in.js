import {message} from "./library.js";
import {display} from "./library.js";
import { Employee} from "./library.js";

console.log(message);
var name =prompt("Enter your name");
var data = display(name);
console.log(data);

let emp1 = new Employee ("Radhika",10101,"Gaming intern");
emp1.dispDetails();