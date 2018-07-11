// fs stands for "file system" and is in charge of reading and writing from the hard drive.
// it's a core module of Node so it never needs to be installed with `npm install fs` -- it's always available
var fs = require('fs');

// downcache is a module I wrote that functions very similar to request, which summons the HTML from a webpage
// The difference is that it saves a copy of the HTML to the hard drive so that we don't have to make an HTTP request every time we run the program
var downcache = require('downcache');

// cheerio is the Node.js port of jQuery, the library that uses CSS selectors to hone in on the part of a page we want.
var cheerio = require('cheerio');

// by convention, we capitalize variables that we have no intention of modifying
// in many languages, this is known as a "constant," which uses less memory
// as of the most recent update to JavaScript, there's a `const` alternative to `var`, but it doesn't make a huge difference
var BASE_URL = "https://pressgallery.house.gov";

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

	var table = $("table");
	var rows = table.find("tr");
	for (var c = 1; c < rows.length; c += 1) {
		var row = rows[c];
		var cells = $(row).find("td");
		if (cells.length != 4) {
			continue;
		}
		var seniority = $(cells[0]).text().trim();
		var name = $(cells[1]).text().trim();
		var party_and_state = $(cells[2]).text().trim();
		var start_of_service = $(cells[3]).text().trim();

		party_and_state = party_and_state.split("), ");
		var party = party_and_state[0].replace("(", "");
		var state = party_and_state[1];

		var member = {
			name: name,
			party: party,
			state: state,
			start_of_service: start_of_service
		}

		if (name != "") {
			members.push(member);
		}

		console.log(seniority, name, party, state, start_of_service);
	}
	fs.writeFileSync(__dirname + "/data/" + category + ".json", JSON.stringify(members, null, 2));
	console.log("Wrote JSON file for", category);
}

downcache("https://pressgallery.house.gov/member-data/demographics/women", getMembersPage);

var callback = function(error, response, html) {
	if (error) {
		console.log("MAYDAY!");
		console.log(error);
		return;
	}

	var members = {};

	var $ = cheerio.load(html);

	var links = $(".field-item > ul > li > a");

	var link_count = links.length;
	var count = 0;

	links.each(function(i, v) {
		var link_name = $(v).text().trim();
		var link_url = BASE_URL + $(v).attr("href");
		downcache(link_url, getMembersPage);
	});

}

// downcache(BASE_URL + "/member-data/demographics", callback);