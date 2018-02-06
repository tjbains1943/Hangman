// Define variables to use later
var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var Win = "";
var words = ["kittens", "monkey", "rotten", "history", "jefferson", "cats", "siamese"];

// Defining variables that get id's from index.html
var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var getWins = document.getElementById("wins");

// function to pick word and start game fresh
function initializeGame() {
  word = words[Math.floor(Math.random() * words.length)];
  allowedGuesses = word.length;
  wrongGuesses = [];
  correctGuesses = [];

  // initialize correctGuesses array with underscores
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}

// goes through and checks if letter was in guess word.
function updateGuesses(letter) {
  // letter is NOT in the word
  if (word.indexOf(letter) === -1) { 
    wrongGuesses.push(letter); 
    // update letters guessed and decrease guesses left if wrong
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    allowedGuesses--;
    letterCountElement.innerHTML = allowedGuesses;
  } else { 
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(' ');
  }
}

// checks for win or lose, increments win, starts new game
function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    alert('You Won!');
    Win++;
    getWins.innerHTML = "Win:" + Win;
    initializeGame();

  } else if (allowedGuesses === 0) {
    alert('You Lost!');
    initializeGame();
  }
}

// starts game at keypress
document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  if (!(event.which <= 90 && event.which >= 65)) return
  updateGuesses(letterGuessed);
  checkWin();
};

// starts the javascript and initializes game
initializeGame();

