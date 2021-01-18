const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const linksRouter = require('./routes/links');

const app = express();

/* for home page rendering */
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
/* app.engine('html', require('ejs').renderFile);
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/links', linksRouter);

module.exports = app;
