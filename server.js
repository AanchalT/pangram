var mongoose = require('mongoose');
var check = require("./app/pangram.js");
var connection=require("./connection.js");

mongoose.connect('mongodb://localhost:27017/test',function(err,db) {
	if(err) {
		console.log(err);
	}
	else 
	{
		var value=check(process.argv[2])
		console.log(value)
		
	}
})
 

