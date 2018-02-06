function game() {
var words = ["kittens", "monkey", "rotten", "history", "jefferson", "cats", "siamese"];

var word = words[Math.floor(Math.random() * words.length)];

var Wins = "";


var guessWord = [];

for(var i = 0; i < word.length; i++) {
		guessWord[i] = "_" ;
	}

for(var i = 0; i < word.length; i++) {
		guessWord[i] = "_" ;
}
var finalWord = guessWord.join(" ");

var GuessesLeft = word.length;
document.getElementById("guessWord").innerHTML = finalWord;
document.getElementById("guessLeft").innerHTML = GuessesLeft;

 document.onkeyup = function(event) {
	var guess = event.key; 
 if (!(event.which <= 90 && event.which >= 65)) return

		if (GuessesLeft > 0) {
		for(var j = 0; j < word.length; j++) {
			if(word[j] === guess) {
				guessWord[j] = guess;
				var finalWord = guessWord.join(" ");
				var checkWord = guessWord.join("");
				document.getElementById("guessWord").innerHTML = finalWord;
				GuessesLeft++;
			}	

			else {	
				var empty = [];
				empty.push(guess);
			}
		}
	GuessesLeft--;
	var letterGuess = empty.join(" ");
	document.getElementById("lettersGuessed").innerHTML += letterGuess;
	}
	else {
		alert("you lose");
	}
	
	function updateGuesses(letter) {
  allowedGuesses--; // decrement guesses left
  letterCountElement.innerHTML = allowedGuesses;

  if (word.indexOf(letter) === -1) { // letter is NOT in the word
    wrongGuesses.push(letter); // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
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

document.getElementById("guessLeft").innerHTML = GuessesLeft;
// document.getElementById("lettersGuessed").innerHTML = letterGuessed;
console.log(word);

if (GuessesLeft > 0 && checkWord === word) {
	alert("you win");
	Wins++;
	document.getElementById("wins").innerHTML = "Wins:" + Wins;
	
	
}
}

}

game();