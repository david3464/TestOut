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
	username: {
		type: String,
		require: true
	},
	role: {
		type: String,
		require: true
	},
    person_info: [{
		address: {type: String},
	    email: {type: String},
        mobile: {type: String}
	}],
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