


// Let's make this poor computer recite the first few digits of Pi. First, we need to teach it the English names of the numbers

var number_names = {
	"0": "zero",
	"1": "one",
	"2": "two",
	"3": "three",
	"4": "four",
	"5": "five",
	"6": "six",
	"7": "seven",
	"8": "eight",
	"9": "nine",
	".": "point"
};

var pi = String(Math.PI);
var digits = pi.split("");

for (var c = 0; c < digits.length; c += 1) {
	console.log(number_names[digits[c]]);
}

process.exit();

var nombres_de_numeros = {
	"zero": "cero",
	"one": "uno",
	"two": "dos",
	"three": "tres",
	"four": "cuatro",
	"five": "cinco",
	"six": "seis",
	"seven": "siete",
	"eight": "ocho",
	"nine": "nueve",
	"point": "punto"
};

for (var c = 0; c < digits.length; c += 1) {
	console.log(nombres_de_numeros[number_names[digits[c]]]);
}

