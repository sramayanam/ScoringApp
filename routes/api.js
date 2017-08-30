/**********************************************************/
/*** BY : SREE RAM Solution Architect Data & AI MSFT  ****/
/**PREPARED for Microsoft Demonstration Purposes only****/
/**Not a Production Grade Code                       ***/
/**Use Caution while replicating this piece of code ***/
/*****************************************************/
var express = require('express');
//require('../models/model');
var router = express.Router();
var finalScore;
router.route('/score/*')
//:id1/:id2/:indate')
	//Score for specified inputs
	.get(function(req, res){
/*    console.log("!!!!Inside GET Snippet!!!");
    res.send('Found Route');
  */
 var model = require('../models/model');
var func = function assignScore (score){
  finalScore = this.score
  console.log("printing final score:::",finalScore )
  if (finalScore != "error") {
    
    res.send('{ "Score": ' + parseInt(finalScore * 1000) + '}')};
}
  model.getForecastDataParams(func,req.params.id1,req.params.id2,req.params.indate) 

});

module.exports = router;