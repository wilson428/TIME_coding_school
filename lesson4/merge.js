var fs = require('fs');
var d3 = require('d3');

var members_str = fs.readFileSync("./data/members.csv", "utf8");
var aclu_str = fs.readFileSync("./data/aclu.csv", "utf8");
var state_abbrs_str = fs.readFileSync("./data/state_abbrs.csv", "utf8");

var members = d3.csvParse(members_str);
var aclu = d3.csvParse(aclu_str);
var state_abbrs = d3.csvParse(state_abbrs_str);

console.log(members[0]);
console.log(aclu[0]);
console.log(state_abbrs[0]);
