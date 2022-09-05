"use strict";
function addFunc(...y) {
    let sum = 0;
    let enterValueOfY = 0;
    alert("Enter the number<100 for Sum");
    do {
        y.push(parseInt(enterValueOfY));
        enterValueOfY = prompt("Enter the number for sum");
    } while (enterValueOfY < 100);
    console.log(y);
    for (let i = 0; i < y.length; i++) {
        sum = sum + y[i];
    }
    return sum;
}
let func = addFunc(0);
document.write(`<h3> sum of variables using rest operator ${func} </h3>`);
