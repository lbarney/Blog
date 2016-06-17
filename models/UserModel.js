var mongoose = require('mongoose');
												//********************
var UserSchema = new mongoose.Schema({          //********ToDo********
	name: {type: String, required: true},       // Change the falses to true
	email: {type: String, required: false},     //************************
	password: {type: String, required: false},
	role: {type: String, required: false, default: "Guest"},
	loggedin: {type: Boolean, required: false}

});

module.exports = mongoose.model('User', UserSchema);