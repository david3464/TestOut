var mongoose = require('mongoose');

// Student Schema
var EmployeeSchema = mongoose.Schema({
    first_name: {
		type: String,
		require: true
	},
	last_name: {
		type: String,
		require: true
	},
	full_name: {
		type: String,
		require: true
	},	
	username: {
		type: String,
		require: true
	},
	role: {
		type: String,
		require: true
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
		require: true
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