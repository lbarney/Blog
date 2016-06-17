var mongoose = require('mongoose');
var commentSchema = require('./commentSchema.js');


var BlogSchema = new mongoose.Schema({
  author: {type: String, default: 'Lance Barney'},
  body:   String,
  imageUrl: {type: String},
  comments: [commentSchema],// require commentSchema
  date: { type: Date, default: Date.now },
  hidden: {type: Boolean, default: false}
  
});

module.exports = mongoose.model('Blog', BlogSchema);