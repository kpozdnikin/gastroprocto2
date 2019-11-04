const mongoose = require('mongoose');
const q = require('q');
const Schema = mongoose.Schema;
const fs = require("fs");
const path = require("path");

//defining schema for articles table

var articlesSchema = new Schema({
	name: { type: String },
	authorId: Number,
	authorImg: '',
	authorAlt: String,
	authorFirstName: String,
	authorLastName: String,
	text: String,
	description: { type: String },
    categoryId: Number,
	categoryName: String,
	url: String,
	mainImg: '',
	mainImgAlt: String,
	mainImgId: String,
	sequence: Number, //for long posts to order by this
	ratings: [{ userId: Number, rating: Number }],
	commentsTreeId: Number,
	dateCreate: { type: Date, default: Date.now },
	dateModified: { type: Date, default: Date.now },
	userModified: Number,
	isDeleted: {
		type: Boolean,
		default: false
	}
});

//To use our schema definition, we need to convert our blogSchema into a Model we can work with
var Article = mongoose.model('articles', articlesSchema);

//Initlizing interface object of this model.
var articlesModel = {};

//function to get articles listings
articlesModel.get = function(skip, limit, isDeleted){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 40;

	Article.find({ 'isDeleted': 'false' }, null, { sort: '-dateCreate' }, function(err, dbArticles) {
		if (err){
			results.reject(err);
		} 
		results.resolve(dbArticles);
	}).skip(skip).limit(limit);
	return results.promise;
};

//function to get single video by its id.
articlesModel.getOne = function(id){
	var results = q.defer();

	if(!id){
		results.reject({ status:'error', error:'Article Id not supplied.' });
	}
	Article.findOne({ _id: id }, function(err, dbArticles) {
		if (err){
			results.reject(err);
		} 
		
		if(dbArticles){
			results.resolve(dbArticles);
		} else{
			results.reject({status:'error', error:'Invalid article Id supplied.'});
		}
	});
	return results.promise;
};

//Insert article into database
articlesModel.insertOne = function(article){
	var results = q.defer();
	var error = checkArticleError(article);
	if(error){
		results.reject({ status:'error', error:error });
	}
	var articles = Array();
	//Добавляем статью
	if(!error){
		article.authorId = 1;
		article.authorAlt = 'Поздникина Ольга Юрьевна';
		article.authorImg = '/uploads/avatar.jpg';
		article.authorFirstName = 'Ольга';
		article.categoryId = '';
		article.categoryName = '';
		article.mainImgId = '';
		article.sequence = '1'; //for long posts to order by this
		article.ratings = [];
		article.commentsTreeId = 1;
		article.dateCreate = { type: Date, default: Date.now };
		article.dateModified = { type: Date, default: Date.now };
		article.userModified = 1;
		article.isDeleted = false;

		articles.push(article);

		Article.collection.insert(articles, function(err, dbArticles) {
			if(err){
				console.log('error occured in populating database');
				console.log(err);
			}
			else{
				var resArticle = dbArticles.ops[0];
				var base64Data = resArticle.mainImg.replace(/^data:image\/jpeg;base64,/, "");
				fs.writeFile(path.join(__dirname, '../../uploads/' + resArticle._id + '.jpg'), new Buffer(base64Data, "base64"), function(err, data) {
					if (err) {
						return console.log(err);
					}
					Article.update({ _id: resArticle._id }, {
						mainImg: '/uploads/' + resArticle._id + '.jpg'
					}, function(error, affected, resp) {

						if(error){
							return console.log(err);
						}
					});
					results.resolve(Article);
				});
			}
		});
	}
	//КОстя!
	return results.promise;
};

//update the article
articlesModel.updateOne = function(article) {
	var results = q.defer();
	var error = checkArticleError(article);

	if(error){
		results.reject({ status:'error', error:error });
	}

	//Обновляем статью
	if(!error) {
		Article.findOne({_id: article._id}, function (err, dbArticle) {
			if (err) {
				return results.reject(err);
			}
			var resArticle = dbArticle;
			if(article.mainImg.indexOf('https://gastroprocto.ru/uploads/') == -1){
				var base64Data = article.mainImg.replace(/^data:image\/jpeg;base64,/, "");
				fs.writeFile(path.join(__dirname, '../../uploads/' + resArticle._id + '.jpg'), new Buffer(base64Data, "base64"), function (err, data) {
					if (err) {
						return console.log(err);
					}
					console.log('photo file updated')
					for (var k in article) dbArticle[k] = article[k];
					dbArticle.mainImg = '/uploads/' + resArticle._id + '.jpg';
					dbArticle.authorImg = '/uploads/avatar.jpg';
					dbArticle.dateModified = new Date;
					dbArticle.save();
					results.resolve(dbArticle);
				});
			}
			else{
				console.log('photo file norm');
				for (var k in article) dbArticle[k] = article[k];
				dbArticle.authorImg = '/uploads/avatar.jpg';
				dbArticle.dateModified = new Date;
				dbArticle.save();
				results.resolve(dbArticle);
			}

		});
	}
	else{
		results.reject(err);
	}
	return results.promise;
};

//delete article
articlesModel.delete = function(articleId){
	var results = q.defer();
	var error = false;
	if(!articleId){
		results.reject({ status:'error', error:error });
		error = true;
	}
	if(!error){
		console.log(articleId);
		Article.findOne({ _id:articleId }, function(err, dbArticle) {
			if (err){
				results.reject(err);
			}
			dbArticle.isDeleted = true;
			dbArticle.remove();
			results.resolve(dbArticle);
		});
	}
	return results.promise;
};

//check input validation
function checkArticleError(article) {
	if (!article.text) {
		return 'Text not supplied.';
	}
	if (!article.url) {
		return 'Url not supplied.';
	}
	if (!article.name) {
		return 'Name not supplied.';
	}
	if (!article.authorId) {
		return 'Author not supplied.';
	}
	if (!article.commentsTreeId) {
		return 'Comments column not supplied.';
	}
	return false;
}

//Function to seed videos data.
articlesModel.seed = function(){
	var articles = Array();
    articles.push(
        {
            name: 'Определение кислотности желудочного сока',
            authorId: 1,
			authorImg: '/uploads/avatar.jpg',
			authorAlt: 'Поздникина Ольга Юрьевна',
			authorFirstName: 'Ольга',
			authorLastName: 'Поздникина',
            text: '<p>Для эффективного лечения воспалительных заболеваний желудочно-кишечного тракта' +
                ' (язва, гастрит и др.) врачу необходимо знать кислотность желудочного сока у пациента. ' +
                'Чаще всего кислотность повышена, что требует назначения препаратов понижающих ее.</p> ' +
                '<p>При выраженном снижении кислотности применение таких препаратов пользы не принесет,' +
                'а наоборот может даже затянуть сроки выздоровления.</p> ' +
                '<p>Определить кислотность желудочного сока можно при проведении фиброгастроскопии (ФГДС). ' +
                'Во время исследования через зонд  желудок пациента орошается красителем, ' +
                'по изменению цвета которого судят о наличии или отсутствии соляной кислоты.</p> ' +
                '<p>Результаты теста заносят в заключение, на основании которого врач выписывает лекарственные препараты.</p> ' +
                '<p>Стоимость ФГДС с определением кислотности желудочного сока составляет 1488 руб.</p> ' +
                '<p>Записаться можно по телефону : 71-44-48. Наш адрес: г. Петрозаводск, пр. Первомайский 17. Каб. 209-210.</p>',
            description: 'Что такое определение кислотности желудочного сока и для чего оно необходимо',
			categoryId: '',
			categoryName: '',
            url: 'Определение кислотности желудочного сока',
			mainImg: '',
			mainImgAlt: 'Определение кислотности желудочного сока',
			mainImgId: '',
            sequence: '1', //for long posts to order by this
            ratings: [],
			commentsTreeId: '',
            dateCreate: { type: Date, default: Date.now },
            dateModified: { type: Date, default: Date.now },
            userModified: 1,
            isDeleted: false
        });

    Article.collection.insert(articles, function(err, dbArticles) {
		if(err){
			console.log('error occured in populating database');
			console.log(err);
		}
		else{
			console.log('Articles table populated.');
		}
	});

};

module.exports = articlesModel;