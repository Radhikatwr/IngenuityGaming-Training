var canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");


// canvas.width=200;
// canvas.width=window.innerWidth;
// ctx.fillStyle="red";
// ctx.fillRect(50,50,150,100);

// ctx.strokeStyle="red";
// ctx.lineWidth=5;
// ctx.strokeRect(250,50,150,100);

// ctx.fillStyle="orange"
// ctx.roundRect(450,50,100,100,[10]);
// ctx.fill();

// ctx.clearRect(0,0,canvas.width,canvas.height);

// ctx.fillStyle="teal"
// ctx.font="30px Arial";
// ctx.fillText("Hello World",200,200);

// ctx.lineWidth=1;
// ctx.strokeStyle="purple";
// ctx.strokeText("Hello!",200,300);

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// // ctx.lineTo(50,50);
// ctx.closePath();
// ctx.fillStyle="teal";
// ctx.fill()


// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200)
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle="pink";
// ctx.arc(300,300,100,0,Math.PI*2);
// // ctx.stroke();
// ctx.fill();

//Animation

var circle =
{
    x:200,
    y:200,
    size:30,
    dx:1,
    dy:1
};

//Draw Circle
function drawcircle()
{
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="purple";
    ctx.fill();
}

function update()
{
    ctx.clearRect(0,0,canvas.Width,canvas.height);
    drawcircle();
    circle.x += circle.dx;
    requestAnimationFrame(update);
    console.log(123);
}
update();



