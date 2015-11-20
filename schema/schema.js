var mongoose = require('mongoose');

module.exports=function(){
	var charschema = new mongoose.Schema({
		sen:String,
		cCount:{}
	})

 	return mongoose.model('charcollection',charschema);
 }