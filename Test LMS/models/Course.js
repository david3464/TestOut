var mongoose = require('mongoose');

// Class Schema
var ClassSchema = mongoose.Schema({
	course_number: { 
		type: String
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	author:{
		type: String
	},
	package:{
		type: String
	},
	lessons:[{
		lesson_number: {type: Number},
		lesson_title: {type: String},
		lesson_body:{type: String}
	}]
});

var Class = module.exports = mongoose.model('Class', ClassSchema);

// Fetch All Classes
module.exports.getClasses = function(callback, limit){
	Class.find(callback).limit(limit);
}

// Fetch Single Class
module.exports.getClassById = function(id, callback){
	Class.findById(id, callback);
}