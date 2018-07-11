function doThisInFiveSeconds() {
	console.log("Five seconds has passed.");

	setTimeout(function() {
		console.log("And I'm an anonymous function. How much time has passed?");
	}, 2000);
}

console.log("The program starts now.");

setTimeout(doThisInFiveSeconds, 5000);

console.log("Is the program over?");