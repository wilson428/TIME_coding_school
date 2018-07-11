var request = require('request');
var cheerio = require('cheerio');

console.log("Trying to load the HTML from NYTimes.com");

request("http://nytimes.com", function(err, resp, body) {
	if (err) {
		console.log("There was an error trying to load the site.");
		console.log(err);
		return;
	}

	console.log("Successively loaded site");

	var $ = cheerio.load(body);
	var top_headline = $("h2.story-heading").first();
	console.log('The lead headline on the New York Times is: "' + top_headline.text() + '"');
});