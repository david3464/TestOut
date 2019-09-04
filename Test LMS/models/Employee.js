var mongoose = require('mongoose');

// Employee Schema
var EmployeeSchema = mongoose.Schema({
    first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	full_name: {
		type: String,
		required: true
	},	
	username: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	address: {
		type: String
	},
	post_code: {
		type: String
	},
	city: {
		type: String
	},
	address: {
		type: String
	},
	location: {
		type: String
	},
	email: {
		type: String
	},
    mobile: {
		type: String
	},
	branch: {
		type: String,
		required: true
	},
	classes:[{
		class_id:{type: [mongoose.Schema.Types.ObjectId]},
		class_title: {type:String}
	}]
	
});

var Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

// Get Employee by Username
module.exports.getEmployeeByUsername = function(username, callback){
	var query = {username: username};
	Employee.findOne(query, callback);
}