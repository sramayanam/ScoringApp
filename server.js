/**********************************************************/
/*** BY : SREE RAM Solution Architect Data & AI MSFT  ****/
/**PREPARED for Microsoft Demonstration Purposes only****/
/**Not a Production Grade Code                       ***/
/**Use Caution while replicating this piece of code ***/
/*****************************************************/
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');
var api = require('./routes/api');
var path = require('path');
var bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', index);
app.use('/api', api);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;









