let arr1:number[] = [1,2,3,4,5];
arr1.push(11)
console.log(arr1);

let arr2:string[] = [];
arr2[0]="Rahul";
arr2[1]="Astha";
arr2[2]="Mohit";
arr2[3]="Ritu";
console.log(arr2);
arr2.forEach((i)=>console.log(i));

//Mixed Array
let arr3:(number|string)[]=[1,2,3,4,"abc","dfdf"];
arr3.push("Qwe");
arr3.push(123);
// arr3.push(true);    not allowed


//readonly: to make array not to be updated
let arr4:readonly number[]=[1,2,3,4,5];
// arr4.push(6)    not allowed due to readonly Array



//Assignment-1
// let assignmentArray:number[]=[1,2,3,5,6,7]
//output:5,10,15,25,30,35