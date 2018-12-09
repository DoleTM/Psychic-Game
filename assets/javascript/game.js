// Create an array of letters for the computer to choose at random
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// Declare the starting scores as variables/set the default 
var wins = 0;
var losses = 0;
var guessRemain = 9;
var userGuesses = [];
var compRandom = letterArray[Math.floor(Math.random() * letterArray.length)];

// Create variables that hold references to the places in the HTML where I want to display wins/losses/guesses left
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessRemainText = document.getElementById("guesses-remaining-text");
var userInputText = document.getElementById("letters-guessed-text");

function newLetter() {
    compRandom = letterArray[Math.floor(Math.random() * letterArray.length)];
}

function error() {
    alert("Please select a letter a thru z");
}

function reset() {
    guessRemain = 9;
    userGuesses = [];

    newLetter();
}
// Have the computer run the game once the page has loaded
window.onload = function() {
    // Have the computer pick a letter at random once a key is de-pressed
    document.onkeyup = function (event) {
        var userInput = event.key;
        console.log(compRandom);
        // Set the different arguements win/loss/tie
        // Win
        if (userInput === compRandom) {
            reset();
            wins++;
            document.getElementById("wins-text").innerHTML = "Wins: " + wins;
            userGuesses = [];
            // Guess again
        } else if (userInput !== compRandom) {
            userGuesses.push(userInput);
            guessRemain--;
            document.getElementById("guesses-remaining-text").innerHTML = "Guesses Left: " + guessRemain;
            document.getElementById("letters-guessed-text").innerHTML = "Your guesses so far: " + userGuesses;
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
// If the user is out of guesses
        } else if (guessRemain === 0) {
            reset();
            return;
// If the user selects a special charater on the keyboard and not a letter
        } else {
            alert("Please select a letter from a to z")
        }
    }

};