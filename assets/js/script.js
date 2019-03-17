
var wins = 0;
var loses = 0;
var gLeft = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var userGuess;
var userGuesses = [];
var button = document.getElementById("scrabble");
var confirmPlay = confirm("Welcome to my guessing game!! Shall we?");



console.log(computerGuess);

function reset() {
    
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    gLeft = 9;
    document.getElementById("gLeft").textContent = gLeft;
    userGuesses = [];
    document.getElementById("lGuesses").textContent = userGuesses;
    
}

function counter () {
    if (userGuess === computerGuess){
        wins++
    }
    else if (userGuess !== computerGuess){
        loses++

    }
    else if (userGuess === computerGuess && userGuess !== computerGuess) {
        gLeft--
     }
        
    }





if (confirmPlay) {
    alert("Awesome!!");
}
else {
    alert("Like you ever had a choice?");
}

button.onclick = function() { 
    var person = prompt("Guess a letter"); 
if (person == computerGuess) {
alert("You got it right");
wins++;
gLeft--;
document.getElementById("wins").textContent = wins;
document.getElementById("gLeft").textContent = gLeft;
}
else {
    alert("Try again!");
loses++;
gLeft--;
    
    document.getElementById("loses").textContent = loses; 
    document.getElementById("gLeft").textContent = gLeft;
    
}
}





    
    






