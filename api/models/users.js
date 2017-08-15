var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;

//defining schema for users table
var userSchema = new Schema({
	username: { type: String },
	firstName: String,
	lastName: String,
	password: String,
	activeSession: String,
	telegram: String,
	dcId: String,
	phone: String,
	dateCreate: Date,
	dateModified: Date,
	isDeleted: Boolean
});

var User = mongoose.model('Users', userSchema);

//Initlizing interface object of this model.
var userModel = {};

//function to get articles listings
userModel.get = function(skip, limit){
	var results = q.defer();
	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;
	User.find(function(err, dbUsers) {
		if (err){
			results.reject(err);
		}
		results.resolve(dbUsers);
	}).skip(skip).limit(limit);
	return results.promise;
};

//function to get single video by its id.
userModel.getOne = function(userId){
	var results = q.defer();
	if(!userId){
		results.reject({ status:'error', error:'User Id not supplied.' });
	}
	User.find({ _id: userId}, function(err, dbUsers) {
		if (err){
			results.reject(err);
		}
		if(dbUsers){
			results.resolve(dbUsers);
		} else{
			results.reject({status:'error', error:'Invalid user Id supplied.'});
		}
	});
	return results.promise;
};

userModel.getByTelegram = function(telegram){
	var results = q.defer();
	if(!telegram){
		results.reject({ status:'error', error:'User Id not supplied.' });
	}
	User.find({ telegram: telegram}, function(err, dbUsers) {
		if (err){
			results.reject(err);
		}
		if(dbUsers){
			results.resolve(dbUsers);
		} else{
			results.reject({status:'error', error:'Invalid user telegram Id supplied.'});
		}
	});
	return results.promise;
};

//Insert article into database
userModel.insertOne = function(user){
	var results = q.defer();
	var error = checkUserError(user);
	if(error){
		results.reject({ status:'error', error:error });
	}
	var users = Array();
	//Добавляем пользователя
	if(!error){
		console.log(user.telegram);
		console.log(typeof user.telegram);
		User.find({ telegram: user.telegram }, function(err, dbUser) {
			if (err){
				results.reject({ status:'error', error:error });
			}
			if(!dbUser.length){
				users.push(user);
				User.collection.insert(users, function(err, dbUsers) {
					if(err){
						console.log('error occured in populating database');
						console.log(err);
					}
					else{
						console.log('User inserted.');
						console.log(dbUsers);
						results.resolve(dbUsers);
					}
				});
			}
			else{
				results.resolve('User exists.');
			}
		});
	}
	return results.promise;
};

//update the article
userModel.updateOne = function(user) {
	var results = q.defer();
	var error = checkUserError(user);

	if(error){
		results.reject({ status:'error', error:error });
	}

	//Обновляем статью
	if(!error){
		User.findOne({ _id:user._id }, function(err, dbUsers) {
			if (err){
				results.reject(err);
			}
			for(var k in user) dbUsers[k] = user[k];
			dbUsers.dateModified = new Date;
			dbUsers.save();
			results.resolve(dbUsers);
		});
	}
	return results.promise;
};

//mark user as deleted
userModel.delete = function(userId){
	var results = q.defer();
	var error = false;
	if(!userId){
		results.reject({ status:'error', error:error });
		error = true;
	}
	if(!error){
		User.findOne({ _id:userId }, function(err, dbUsers) {
			if (err){
				results.reject(err);
			}
			dbUsers.isDeleted = true;
			dbUsers.save();
			results.resolve(dbUsers);
		});
	}
	return results.promise;
};

//check input validation
function checkUserError(user) {
	if (!user.telegram) {
		return 'MedogramId not supplied.';
	}
	if (!user.phone) {
		return 'Phone not supplied.';
	}
	return false;
}

module.exports = userModel;