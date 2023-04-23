// player1 part 
var randomNumber1 = Math.floor(Math.random()*6) + 1; // random btw 1 and 6

var randomDiceImage = "dice"+randomNumber1+".png"; //random btw dice1 and dice6 imgs

var randomImageSource = "images/"+randomDiceImage; //img1 src to 6

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // random for player1



// player2 part
var randomNumber2 = Math.floor(Math.random()*6) + 1; // random btw 1 and 6

var randomDiceImage2 = "dice"+randomNumber2+".png"; //random btw dice1 and dice6 imgs

var randomImageSource2 = "images/"+randomDiceImage2; //im

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // random for player1

// both part 
// if player1 wins 
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = ("Player1 wins!");
}
// if player2 wins 
 else if (randomNumber1<randomNumber2)   {
    document.querySelector("h1").innerHTML = ("Player2 wins!");
}
else{
    document.querySelector("h1").innerHTML = ("Draw!");
    
}