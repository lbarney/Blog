var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
	body: {type: String},
	date: {type: Date, default: Date.now},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	
});


module.exports =  commentSchema;