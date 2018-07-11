// LOOPS, IF/THEN and FUNCTIONS

// a function is a block of code that can receive a series of inputs and doesn't run until it is "invoked"
// let's write a function that determines whether a number is even or odd
function evenOrOdd(value) {
	// let's make sure value is a Number, not a String or some other nonsense
	// parseInt is a way of converting a variable into an integer.
	// The number 10 in the second argument specifies that we want base 10, which is important if there's a leading zero like in some ZIP codes
	value = parseInt(value, 10);

	// In JavaScript and many other languages, the percentage sign is used for modular division, which return the remainder of integer division
	if (value % 2 == 0) {
		return "even";
	}
	return "odd";
}

function testEvenOddFunction() {

}

// let's test our function with a for loop
for (var c = 0; c <= 10; c += 1) {
	console.log(String(c) + " is " + evenOrOdd(c));
}