//requiring NPM modeles
require('babel-core/register');
global.jQuery = require('jquery');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});

var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connection;

var app = express();

db.on('error', console.error);

//requiring local modeles
var configs = require('./config');
var routes = require('./routes/routes');

//var userModel = require('./models/users');

var helperFunctions = require('./helpers/helperFunctions');


// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));

// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
// parse application/json.
app.use(bodyParser.json({limit: '50mb'}));

//connedting to mongoDB
mongoose.connect('mongodb://' + configs.dbHost + '/' + configs.dbName);
//populating data if DB is not already populated.
helperFunctions.populateDb();

//Initilizing routes.
routes(app);

// serve articles.
//app.use('/api/articles', express.static('articles'));


//Finally starting the listener
app.listen(configs.applicationPort, function () {
    console.log('Example app listening on port ' + configs.applicationPort + '!');
});
