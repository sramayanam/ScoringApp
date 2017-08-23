/**********************************************************/
/*** BY : SREE RAM Solution Architect Data & AI MSFT  ****/
/**PREPARED for Microsoft Demonstration Purposes only****/
/**Not a Production Grade Code                       ***/
/**Use Caution while replicating this piece of code ***/
/*****************************************************/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

     res.render('index', { title: "Forecast App"});
     /** 
    console.log("printing request params", req.params)

    var model = require('../models/model');
    var func = function assignScore(score) {
        finalScore = this.score
        console.log("printing final score:::", finalScore)
        if (finalScore != "error") {

            res.send("Score from the ML Model from index ::::: " + parseInt(finalScore * 1000))
        };
    }
    model.getForecastData(func)
    **/
});

module.exports = router;