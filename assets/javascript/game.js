// Create an array of letters for the computer to choose at random
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Declare the starting scores as variables/set the default 
var wins = 0;
var losses = 0;
var guessRemain = 9;
var userGuesses = [];
var compChoice = undefined;
//var userInput = event.key;
var compRandom = letterArray[Math.floor(Math.random()* letterArray.length)];
// Create variables that hold references to the places in the HTML where I want to display wins/losses/guesses left
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessRemainText = document.getElementById("guesses-remaining-text");
var userInputText = document.getElementById("letters-guessed-text");

function newLetter(){
    compRandom;
}
// Create functions to call upon later
function win(){
    wins++;
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
}

function guessAgain(){
    guessRemain--;
    document.getElementById("guesses-remaining-text").innerHTML = "Guesses Left: " + guessRemain;
    document.getElementById("letters-guessed-text").innerHTML = "Your guesses so far: " + userGuesses;
}

function youLose(){
    alert("You are out of guesses, Play again?");
    losses++;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
}

function error(){
    alert("Please select a letter a thru z");
}

function reset(){
    guessRemain = 9;
    userGuesses = [];

    newLetter();
}
// Have the computer run the game once the page has loaded
window.onload = function() {
// Have the computer pick a letter at random once a key is de-pressed
    document.onkeyup = function(event) {
        var userInput = event.key;
        console.log(compRandom);
// Set the different arguements win/loss/tie
// Guess again
        if (userInput != compRandom) {
            guessAgain();
            userGuesses.push(userInput);
// Win
        }else if (userInput === compRandom) {
            win();
            reset();
// If the user selects a special charater on the keyboard and not a letter
        }else if (event.keyCode < 65 || event.keyCode > 90) {
            error();
// Lose the game
        }else if(guessRemain === 0) {
            youLose();
            reset();
        }

    }
};