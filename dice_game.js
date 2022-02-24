



//who wins


function whoWin(){
    var randomNumber1 = Math.floor(Math.random() *6) + 1;

var randomDiceImg = "Dice" + randomNumber1 + ".png";

var randImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randImgSrc);


// dice2

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImg2 = "Dice" + randomNumber2 + ".png";

var randImgSrc2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randImgSrc2);

    if(randomNumber1 > randomNumber2){
        let log1 = document.querySelector("h2").innerHTML = "Player 1 Wins....!"
    }else{
        let log2 = document.querySelector("h2").innerHTML = "Player 2 Wins....!"
    
    }
    
}
// var loggyb = document.querySelector("h2").innerHTML = "Player 2 Wins....!"
