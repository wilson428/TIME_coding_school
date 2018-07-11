// N is how long we want the sequence to be

var argv = require('minimist')(process.argv.slice(2));

function Fibonacci(N) {
	// we don't want insane values of `N`, so let's cap it at 100
	if (N > 100) {
		N = 100;
	}

	// the Fibonacci sequence begins with 1,1
	var sequence = [1,1];

	// let's run a loop from 0 to N-2, since we've already got two values
	for (var c = 0; c < N - 2; c += 1) {
		var length = sequence.length;
		var next_number = sequence[length - 2] + sequence[length - 1]; // remember, since counting a list starts at zero, the last value is a length - 1
		sequence.push(next_number);
	}

	return sequence;
}

// if the user does not specify a value for N, e.g. `node programs/Fibonacci.js --N=10`, default to 25
if (argv.N) {
	var fib = Fibonacci(argv.N);
} else {
	var fib = Fibonacci(25);
}

console.log("Here are the first", fib.length, "Fibonacci numbers:", fib.join(" "));
