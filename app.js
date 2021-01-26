const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const linksRouter = require('./routes/links');
const sequelize = require('./models').sequelize;

const cors = require('cors');

const corsOptions = {
    origin: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: "content-type, accept", 
    maxAge: 10, // Seconds.
  };

const app = express();

/* for home page rendering */
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
/* app.engine('html', require('ejs').renderFile);
*/

app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/links', linksRouter);

module.exports = app;
