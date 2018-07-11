
var paper = Raphael("drawing", 500, 500);

var rect = paper.rect(10, 10, 150, 150).attr("fill", "red");

rect.click(function() {
	this.attr("fill", "orange");
});