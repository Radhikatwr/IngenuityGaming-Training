var h1=document.querySelector('h1');
var mole=document.querySelector('#mole');
var dirt=document.querySelector('#mud');
var startbtn=document.querySelector('#start');
// var dirts=document.getElementsByClassName('dirt');
// var dirts=document.querySelectorAll('dirt');
var dirts=document.querySelectorAll('.dirt');

var moles=document.getElementsByClassName('mole');
var currentPoint=document.getElementsByClassName('points');
// // var alldirt=document.querySelector('.dirt');
// // var allmoles=document.querySelector('.mole');
// // var points=document.querySelector('.points');
// // var pointsNum=document.querySelector('#currentPoint');
// var 

var counter=0;

function start()
{
    startbtn.style.visibility="hidden";
    mole.style.visibility="hidden";
    dirt.style.visibility="hidden";
    h1.style.visibility="hidden";

for(var i=0;i<6;i++){
    dirts[i].style.visibility="visible";

}
for(var i=0;i<2;i++){
    currentPoint[i].style.visibility="visible";
}


    // for(let i=0;i<2;i++){
    //     points[i].style.visibility=;
    // }
    // for(let i=0;i<6;i++){
    //     alldirt[i].style.visibility='visible';
    // }
    // pointsNum.style.visibility="visible";

    setInterval(() => {
        var randomNum=Math.floor(Math.random()*6);
        moles[randomNum].style.visibility="visible";
        setTimeout(() => {
            moles[randomNum].style.visibility="hidden";
        },900);
        
    },1000);
}
function incr()
{
    counter++;
    document.getElementById("currentPoint").innerHTML=counter;
}



