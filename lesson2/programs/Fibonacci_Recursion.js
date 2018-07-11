// N is how long we want the sequence to be

var argv = require('minimist')(process.argv.slice(2));

// once again, we'll start off with the required first two values
var sequence = [1, 1];

function Fibonacci_Recusion(N, v1, v2) {
	// first, check for the "terminal condition", and return if so
	if (sequence.length >= N || sequence.length >= 100) {
		return;
	}

	// v1 and v2 are the two preceding numbers in the sequence
	// we shouldn't make people specify this when the run the function, so let's see if they're present
	if (typeof v1 == "undefined") {
		v1 = 1;
	}

	if (typeof v2 == "undefined") {
		v2 = 1;
	}

	var next_number = v1 + v2;
	sequence.push(next_number);

	Fibonacci_Recusion(N, v2, next_number);
}

// if the user does not specify a value for N, e.g. `node programs/Fibonacci.js --N=10`, default to 25
if (argv.N) {
	Fibonacci_Recusion(argv.N);
} else {
	Fibonacci_Recusion(25);
}

console.log("Here are the first", sequence.length, "Fibonacci numbers:", sequence.join(" "));