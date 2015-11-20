var mongoose = require('mongoose');
var charModel=require('../schema/schema.js')()
module.exports = function(phrase) {
	var sentence=phrase.toLowerCase();
	var charCount={};
	var alphabates="abcdefghijklmnopqrstuvwxyz";
	
	for(var i=0;i<sentence.length;i++)
	{
		var charCode=sentence.charCodeAt(i)
		if(charCode > 96 && charCode < 123)
		{
			if (typeof(c[sentence[i]]) !== 'undefined')
    			charCount[sentence[i]]++;
 			else
  				 charCount[sentence[i]]=1;
		}
	}
	var pangram = new pangramModel{
		sen:phrase,
		cCount:charCount
	}
	pangram.save(function(err,doc){
		if(err)
			console.log(err)
		else
			 console.log("data is stored")
				
	})
	
    for(var i=0;i<26;i++)
	{
		if (typeof(charCount[alphabates[i]]) === 'undefined')
			return false;
	}
	return true; 

}


