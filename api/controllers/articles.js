var articleModel = require('../models/articles');
var userModel = require('../models/users');


var articles = {};

// controller that handles articles listings fetch request.
articles.get = function (req, res) {
	var skip = req.query.skip,
		limit = req.query.limit,
		isDeleted = req.query.isDeleted,
		articlesData = articleModel.get(skip, limit, isDeleted);
	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.send(err);
	});
};

// controller that handles single article fetch request.
articles.getOne = function (req, res) {
	var articleId = req.query.articleId,
		articlesData = articleModel.getOne(articleId);
	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};
// controller that add single article fetch request.
articles.insertOne = function (req, res){
	var article = req.body,
		telegram = req.query.user;
	var response = {};
	if(telegram){
		var userData = userModel.getByTelegram(telegram);
		userData.then(function(data) {
			if (data.length) {
				var phone = data[0].phone;
				if (phone == '79214506673' || phone == '79217267451') {
					var articlesData = articleModel.insertOne(article);
					articlesData.then(function (data) {
						response.status = 'success';
						response.data = data;
						res.send(response);
					}, function (err) {
						res.status(400);
						res.send(err);
					});
				}
				else{
					response.status(401);
					res.send('access error');
				}
			}
			else{
				response.status(401);
				res.send('access error');
			}
		});
	}
	else{
		response.status(401);
		res.send('access error');
	}

};
// controller that update single article fetch request.
articles.updateOne = function (req, res){
	var article = req.body,
		telegram = req.query.user;
	var response = {};
	if(telegram){
		var userData = userModel.getByTelegram(telegram);
		userData.then(function(data) {
			if (data.length) {
				var phone = data[0].phone;
				if (phone == '79214506673' || phone == '79217267451') {
					var articlesData = articleModel.updateOne(article);
					articlesData.then(function(data){
						var response = {};
						console.log('update success');
						response.status = 'success';
						response.data = data;
						res.send(response);
					}, function(err){
						console.log('update error');
						res.status(400);
						res.send(err);
					});
				}
				else{
					console.log('user phone not allowed');
					response.status(401);
					res.send('access error');
				}
			}
			else{
				console.log('check user error');
				response.status(401);
				res.send('access error');
			}
		});
	}
	else{
		console.log('telegram get error');
		response.status(401);
		res.send('access error');
	}
};

articles.delete = function (req, res){
	var articleId = req.query.articleId,
		articlesData = articleModel.delete(articleId);
	articlesData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

module.exports = articles;