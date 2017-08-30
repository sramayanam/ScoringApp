/**********************************************************/
/*** BY : SREE RAM Solution Architect Data & AI MSFT  ****/
/**PREPARED for Microsoft Demonstration Purposes only****/
/**Not a Production Grade Code                       ***/
/**Use Caution while replicating this piece of code ***/
/*****************************************************/
var express = require('express');
var router = express.Router();
var finalScore;
router.route('/score/:id1/:id2/:indate')
  .get(function (req, res) {
    var model = require('../models/model');
    var func = function assignScore(score) {
      finalScore = this.score
      
      if (finalScore != "error") {

        res.send('{ "Score": ' + parseInt(finalScore * 1000) + '}')
      };
    }
    var encodeCorrectly = req.params.indate;
    var indateString = encodeCorrectly.split("-").join("/");
    
    model.getForecastDataParams(func, req.params.id1, req.params.id2, indateString)

  });

module.exports = router;