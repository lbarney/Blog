var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
	author: {type: String},
	date: {type: String},
	content: {type: String},
	imageUrl: {type: String},
	comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Blog', BlogSchema);