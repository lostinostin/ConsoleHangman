// Boiler plate code
var Letter = function(lett) {
	//makes charac
	this.charac = lett;
	//make an appear property and set it to what makes sense
	this.appear = false;
	//make a letterRender property and set it to a function that does what you think makes sense
	this.letterRender = function() {
		if (this.appear) {

			return this.charac;

		} else {

			return " _ ";
		}
	}
};

//export the Letter constructor here
module.exports.Letter = Letter;