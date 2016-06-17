var BlogModel = require('./../models/BlogModel.js');


module.exports = {
	create: function(req, res, next){
		var post = new BlogModel(req.body);
		post.save(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	read: function(req, res, next){
		BlogModel
		.find()
		.populate('comments.user') //comments.user?
		.exec(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	update: function(req, res, next){
		BlogModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	delete: function(req, res, next){
		BlogModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	readById: function(req, res, next){
		BlogModel
		.findById(req.params.id, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	}
};