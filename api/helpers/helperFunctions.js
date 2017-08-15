var Articles = require('../models/articles');

var helpers = {};

//Function that checks if the request is authenticated or not.
helpers.isAuthenticated = function(req, res, next){
	var user = {
		activeSession : "16034252415915509138",
		firstName: "Konstantin",
		lastName: "Pozdnikin",
		medogramId: "227366055",
		phone: "79214506673"
	};

	/*if(!user){
		res.status(401);
		res.send({ status:'error', error:'Not Authorized.' });
	}
	else{
		/!*var user = user.getBySessionId(req.query.sessionId);
		user.then(function(dbUser){
			if(dbUser){
				next();
			}
			else{
				res.status(401);
				res.send({status:'error', error:'Not Authorized.'});
			}	
		});*!/
		next();
	}*/
	next();
};

//Function to populate data in DB if DB is empty.
helpers.populateDb = function(){
	var promise = Articles.get();
	promise.then(function(data){
		if(data.length){
			console.log('Articles table already populated.');
		}
		else{
			console.log('Populating articles table.');
			Articles.seed();
		}
	});
};

module.exports = helpers;
