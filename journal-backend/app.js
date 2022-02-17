const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./lib/models.js').getMongoose();

const dotenv = require('dotenv').config();

var indexRouter = require("./routes/index.js");


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/', indexRouter);


if (process.env.NODE_ENV !== 'production') {
	app.use(cors({origin: 'http://localhost:8080'})) // TODO: in env - webpack?
}
app.use(function(req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	// Pass to next layer of middleware
	next();
});
app.options('*', cors())

//connect to mongodb
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, useUnifiedTopology: true}) // , useFindAndModify:false, useCreateIndex: true
  .catch(error => console.log(error)); //TODO test error connection

//TODO test this
mongoose.connection.on('error', err => {
  console.log(err);
});

//server @ port 8081
var server = http.listen(process.env.HOSTPORT || 8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Journal App listening at http://%s:%s/', host, port);
});