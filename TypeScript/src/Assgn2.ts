
function addFunc(...y: number[]) {
    let sum: number = 0;
    let enterValueOfY:any=0;
    alert("Enter the number<100 for Sum");
    do{
        y.push(parseInt(enterValueOfY));
      enterValueOfY=prompt("Enter the number for sum");
    }while(enterValueOfY<100);

    console.log(y);
      for (let i: number = 0; i < y.length; i++) {
        sum = sum + y[i];
      
    }
    return sum;
  }
  let func: number = addFunc(0);
  document.write(`<h3> sum of variables using rest operator ${func} </h3>`);
  