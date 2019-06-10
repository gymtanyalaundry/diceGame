var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"
var randomNumber2 = (Math.floor(Math.random()*6)+1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelector("img.img1").setAttribute("src", randomDiceImage1);
document.querySelector("img.img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "<h1>Player 1 Wins</h1>";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML= "<h1>Player 2 Wins</h1>";
}
  else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML= "<h1>Draw!</h1>";

  }
