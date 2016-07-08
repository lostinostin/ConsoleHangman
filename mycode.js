//Contains all of the methods which will check the letters guessed versus the random word selected.

// My code

// function Check(randomWord, guess){
// 	this.randomWord = randomWord;
// 	this.randomWordArr = randomWord.split('');
// 	this.guess = guess;
// 	this.correctGuessesArr = [];
// 	this.incorrectGuessesArr = [];
// 	this.lettersGuessedArr = [];

// 	this.pushGuesses = function(){
// 		for (var i = 0; i < this.randomWordArr; i++){
// 			if (this.guess === this.randomWordArr[i]) {
// 				this.correctGuessesArr.push(this.guess);
// 				return true;
// 			} else {
// 				this.incorrectGuessesArr.push(this.guess);
// 				return false;
// 			}
// 		}
// 	};

// 	this.noCopy = function(){
// 		for (var i = 0; i < this.correctGuessesArr; i++){
// 			if (this.lettersGuessedArr.indexOf(this.correctGuessesArr[i]) === -1) {
// 				this.lettersGuessedArr.push(this.correctGuessesArr[i]);
// 			}
// 		}

// 		for (var j = 0; i < this.incorrectGuessesArr; j++){
// 			if (this.lettersGuessedArr.indexOf(this.incorrectGuessesArr[i]) === -1) {
// 				this.lettersGuessedArr.push(this.incorrectGuessesArr[i]);
// 			}
// 		}
// 	};

// }


// Controls whether or not a correct letter or a "_" appears.

// My code

// function ReplaceLetters(blankSpace, randomWord, correctGuesses){
// 	this.blankSpace = "";
// 	this.randomWord = randomWord.split('');
// 	this.correctGuesses = correctGuesses;

// 	this.addBlankLines = function() {
// 		for (var i = 0; i < randomWord; i++) {
// 			this.blankSpace += " _ ";
// 		}
// 	}

// 	this.replaceBlanksWithLetters = function() {
// 		for (var i = 0; i < randomWord; i++){
// 			if ()
// 		}
// 	}
// }
