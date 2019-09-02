var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		require: true
	},
	branch: {
		type: String,
		require: true
	},
	type:{
		type:String,
		require: true
    },
    password:{
		type: String,
		bcrypt: true
	},
	date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

//Store Employee and User Info into Database
module.exports.saveEmployee = function(newUser, newEmployee, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		newUser.save();	
		// console.log('Saved into User Database')
		newEmployee.save();
		// console.log('Saved into Employee Database')
	});
}

//Store Manager and User Info into Database
module.exports.saveEmployee = function(newUser, newEmployee, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		newUser.save();	
		// console.log('Saved into User Database')
		newEmployee.save();
		// console.log('Saved into Employee Database')
	});
}
