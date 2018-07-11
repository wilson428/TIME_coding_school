// fs stands for "file system" and is in charge of reading and writing from the hard drive.
// it's a core module of Node so it never needs to be installed with `npm install fs` -- it's always available
var fs = require('fs');

// downcache is a module I wrote that functions very similar to request, which summons the HTML from a webpage
// The difference is that it saves a copy of the HTML to the hard drive so that we don't have to make an HTTP request every time we run the program
var downcache = require('downcache');

// cheerio is the Node.js port of jQuery, the library that uses CSS selectors to hone in on the part of a page we want.
var cheerio = require('cheerio');

// downcache takes two arguments: The url to summon, and a "callback" function that fires when the server responds with three arguments
// those arguments to the callback are, in this order:
// - Any error messages we might have encountered; 
// - An object that has metadata about the response, such as whether it's a 404 or a valid page
// - A long string that contains the HTML of the page, if we didn't encounter any errors
// - It's up to us to write the callback function to parse that HTML

var getMembersPage = function(error, response, html) {
	if (error) {
		console.log("MAYDAY!");
		console.log(error);
		return;
	}

	var members = [];

	var $ = cheerio.load(html);
	var category = $("title").text().replace(" | House Press Gallery", "");
	console.log(category);
}

downcache("https://pressgallery.house.gov/member-data/demographics/women", getMembersPage);