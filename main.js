// This is where the game is played and contains all of the user-input. The application should end when a player successfully guesses a word or runs out of guesses.

var prompt = require('prompt');
var word = require('./word.js');
var gameObj = require('./game.js');

prompt.start();

game = {
	//wordBank : ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new word.Word(gameObj.game.wordChoices[Math.floor(Math.random()* gameObj.game.wordChoices.length)]);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
		    console.log('  The letter or space you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
		    	console.log('You guessed wrong!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You guessed right!');

		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('You Won!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log('here are the letters you guessed already: ');

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('Game over bro it was ', self.currentWrd.word);
		    	console.log('Get with the program man');
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

game.startGame();