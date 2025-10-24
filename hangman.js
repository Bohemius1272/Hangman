var POSSIBLE_WORDS = ["javascript", "glass", "amazing", "pancake", "programming", "google", "developer", "apple", "python", "computer", "vault", "wizard",
     "galaxy", "notebook", "keyboard", "route", "monitor", "laptop", "headphones", "charger", "internet"];
var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log(`Word chosen was ${word}`);
    guesses = "";
    guess_count = MAX_GUESSES;
    updatePage();
}
function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value;
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
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";


}

