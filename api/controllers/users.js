var userModel = require('../models/users');

var users = {};

users.get = function (req, res) {
	var skip = req.query.skip,
		limit = req.query.limit,
		userData = userModel.get(skip, limit);
	userData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.send(err);
	});
};

users.getOne = function (req, res) {
	var userId = req.query.userId,
		userData = userModel.getOne(userId);
	userData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};
users.getByTelegram = function (req, res) {
	var telegram = req.query.telegram,
		userData = userModel.getByTelegram(telegram);
	userData.then(function(data){
		var resp = {};
		if(data.length){
			var phone = data[0].phone;
			console.log(phone);
			if(phone == '79214506673' || phone == '79217267451')
				resp = {
					userAuth: true,
					isAdmin: true
				};
		}
		var response = {};
		response.status = 'success';
		response.data = resp;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};
// controller that add single article fetch request.
users.insertOne = function (req, res){
	var user = req.body;
	var newUserModel = {
		_id: user._id || null,
		username: user.username || '',
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		password: user.password || '',
		activeSession: user.activeSession || '',
		telegram: user.telegram || '',
		dcId: user.dcId || '',
		phone: user.phone || '',
		dateCreate: user.dateCreate || '',
		dateModified: user.dateModified || '',
		isDeleted: user.isDeleted || '',
	};
	var newUsersData = userModel.insertOne(newUserModel);
	newUsersData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send("couldn't insert user" + err);
	});
};
// controller that update single article fetch request.
users.updateOne = function (req, res){
	var user = req.body,
		userData = userModel.updateOne(user);
	userData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

users.delete = function (req, res){
	var userId = req.query.userId,
		userData = userModel.delete(userId);
	userData.then(function(data){
		var response = {};
		response.status = 'success';
		response.data = data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};


module.exports = users;