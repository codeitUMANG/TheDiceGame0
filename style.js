
window.onload = myFunction1();

function myFunction1(){
    document.querySelector("h2").innerHTML = "The game to decide the winner among two contestants";
}


document.querySelector("a").onclick= myFunction();

function myFunction(){
var randomNum1 = Math.floor(Math.random()*6)+1;
var img1src = "./images/dice"+randomNum1+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1src);

var randomNum2 = Math.floor(Math.random()*6)+1;
var img2src = "./images/dice"+randomNum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",img2src);

if(randomNum1>randomNum2){
    document.querySelector("h2").innerHTML = "Player 1 Won!🥳";
} else if(randomNum1<randomNum2){
    document.querySelector("h2").innerHTML = "Player 2 Won!🤩";
} else{
    document.querySelector("h2").innerHTML = "Draw!😅";
}
}