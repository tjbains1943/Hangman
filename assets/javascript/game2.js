var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var Win = "";
var words = ["kittens", "monkey", "rotten", "history", "jefferson", "cats", "siamese"];

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var getWins = document.getElementById("wins");
function resetGame() {
    word = [];
    wordElement.innerHTML = [];
    letterCountElement.innerHTML = [];
    lettersGuessedElement.innerHTML = [];
}
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

function updateGuesses(letter) {
// decrement guesses left
  if (word.indexOf(letter) === -1) { // letter is NOT in the word
    wrongGuesses.push(letter); // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    allowedGuesses--;
    letterCountElement.innerHTML = allowedGuesses;
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(' ');
  }
}

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

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  if (!(event.which <= 90 && event.which >= 65)) return
  updateGuesses(letterGuessed);
  checkWin();
};

initializeGame();

