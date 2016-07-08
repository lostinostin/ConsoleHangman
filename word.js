// Boiler plate code

//import Letter above with requiring the letter.js file
var letter = require('./letter.js');

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;

	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets = [];

	//set a property called found to false
	this.found = false;

	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getLets = function(){
		for (var i = 0; i < this.word.length; i++){
			this.lets.push(new letter(this.word.charAt(i)));
		}
	};

	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
	// 	if () {

	// 		found = true;

	// 	} else {

	// 		return;

	// 	}
	// 	return found;
	// };

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		this.whatToReturn = 0;
		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (var i = 0; i < this.lets.length; i++){
			if (letter.charac )
		}
		//return whatToReturn
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str

		//return str
	};
}

};

module.exports = Word;
//export the Word constructor here at the end
