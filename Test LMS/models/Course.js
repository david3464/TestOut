var mongoose = require('mongoose');

// Class Schema
var CourseSchema = mongoose.Schema({
	course_number: { 
		type: String
	},
	category: {
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

var Course = module.exports = mongoose.model('Course', CourseSchema);