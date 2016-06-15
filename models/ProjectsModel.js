var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
	description: {type: String},
	url: {type: String},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	likes: {type: Number}
});

module.exports = mongoose.model('Project', ProjectSchema);