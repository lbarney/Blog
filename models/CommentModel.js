var mongoose = require('mongoose');


var CommentSchema = new mongoose.Schema({
	body: {type: String},
	date: {type: Date, default: Date.now},
	blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Comment', CommentSchema);