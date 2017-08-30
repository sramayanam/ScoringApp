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
// view engine setup
var path = require('path');
var bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', index);
//app.use('/api', api);
//app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* remove
app.use(function(req, res, next) {
console.log("!!!!Inside GET Snippet");
    res.send('Found Route!!');
});
*/
var finalScore;
app.use('/api/score/:id1/:id2/:indate', function (req, res) {

    var model = require('./models/model');
    var func = function assignScore(score) {
        finalScore = this.score
        console.log("printing final score:::", finalScore)
        if (finalScore != "error") {

            res.send('{ "Score": ' + parseInt(finalScore * 1000) + '}')
        };
    }
    var encodeCorrectly = req.params.indate;
    var indateString = encodeCorrectly.split("-").join("/");
    console.log("printing parameters passed into the function",req.baseUrl,req.params.id1, req.params.id2, req.params.indate);
    model.getForecastDataParams(func, req.params.id1, req.params.id2, indateString)

})



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
/*var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
*/
module.exports = app;









