const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const web = require('./routes/web');

const app = express();

const PORT = process.env.PORT || 5000;

// import db config
const db = require('./config/keys').MongoURI;

// connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB CONNECTED...'))
	.catch(err => console.log(err));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', web);

app.listen(PORT, () => console.log(`server started on port ${PORT}!!!`));
