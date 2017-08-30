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
});

module.exports = router;