var multiplyAndDouble = function(a, b) {
	// let’s make sure some bozo didn’t try to multiply strings
	if (typeof(a) !== "number") {
		// parseFloat is like parseInt, but can handle decimal points
		a = parseFloat(a);
	}

	if (typeof(b) !== "number") {
		b = parseFloat(b); 
	}

	return(2 * a * b);
}

var getBaseXInverse = function(x, p) {
	if (typeof(x) !== "number") {
		x = parseFloat(x);
	}

	// normally we'd want to check that the denominator is not 0
	// dividing by 0 in JavaScript returns a special number called "Infinity"
	// however, it is not possible for 2^p to be 0 for any value of `p`
	return(1 / Math.pow(x, p));
}

// Here's our higher-order function. (In truth, any function can be higher-order. It's not a special type of variable)
// fn is the argument where we'll pass a function name
// N is the number of times to run that function
var cumulativeOutput = function(fn, N, value) {
	var sum = 0;
	for (var c = 0; c < N; c += 1) {
		sum = sum + fn(value, c); // here the function passed to `fn` will get a constant input for its first argument and the value of `c` for the second
	}
	return(sum);
}

// let's try passing the first two functions
console.log(cumulativeOutput(multiplyAndDouble, 10, 2));
console.log(cumulativeOutput(getBaseXInverse, 50, 2));
