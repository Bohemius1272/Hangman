var POSSIBLE_WORDS = ["javascript", "glass", "amazing", "pancake", "programming", "google", "developer", "apple", "python", "computer", "vault", "wizard",
     "galaxy", "notebook", "keyboard", "route", "monitor", "laptop", "headphones", "charger", "internet", "poopypants", "reznov", "sixseven", "cybersecurity", "menendez"];
var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
var gameActive = false;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log(`Word chosen was ${word}`);
    guesses = "";
    guess_count = MAX_GUESSES;
    gameActive = true;
    document.getElementById("guess").value = "";
    updatePage();
}
function guessLetter() {
    if (!gameActive) {
        return; // don't allow guesses if game isn't active
    }

    var input = document.getElementById("guess");
    var letter = input.value.toLowerCase();
    
    // clear input field
    input.value = "";
    
    // don't process empty input or previously guessed letters
    if (!letter || guesses.indexOf(letter) >= 0) {
        return;
    }

    if(word.indexOf(letter) < 0) {
        console.log(`Incorrect guess!`);
        guess_count--;
    }
    
    console.log(`Current GuessCount: ${guess_count}`);
    guesses += letter;
    updatePage();
}
function updatePage() {
    console.log("Updated Called");
    var clueString = "";
    console.log("Empty cluestring: "+clueString);
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        }
        else
            clueString += "_ ";
    }

    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
    var guessArea = document.getElementById("guesses");
    var statusMessage = "";
    
    // check for win condition
    if (word && !clueString.includes("_")) {
        statusMessage = "<div class='game-status win'>You win! You are an epic gamer!</div>";
        gameActive = false;
    }
    // check for lose condition
    else if (guess_count === 0) {
        statusMessage = "<div class='game-status lose'>Game Over! The word was: " + word + ". YOU SUCK!</div>";
        gameActive = false;
    }
    
    guessArea.innerHTML = "Guessed Letters: " + guesses + statusMessage;

    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}

