const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const teams = require('./Teams');
const web = require('./routes/web');
const api = require('./routes/api');

const app = express();

const PORT = 5000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', web);
app.use('/api/teams', api)

app.listen(PORT, () => console.log(`server started on port ${PORT}!!!`));
