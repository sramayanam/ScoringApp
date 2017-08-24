/**********************************************************/
/*** BY : SREE RAM Solution Architect Data & AI MSFT  ****/
/**PREPARED for Microsoft Demonstration Purposes only****/
/**Not a Production Grade Code                       ***/
/**Use Caution while replicating this piece of code ***/
/*****************************************************/
var rqaccesstoken = require('request-promise')
var rqforecastdata = require('request-promise')

//Backend to render the required values from the RestAPI on Microsoft R Server

module.exports.getForecastData = function getForecastData(callback) {

    var accesstoken
    const options = {
        method: 'POST',
        uri: 'http://10.1.0.4:12800/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            username: 'admin',
            password: 'Lz8oq1dn$Lz1'
        }
        , json: true
    }

    rqaccesstoken(options)
        .then(function (response) {
            console.log("The Access token is", JSON.stringify(response.access_token))
            accesstoken = "Bearer " + response.access_token


        })
        .then(function () {
            const ioptions = {
                method: 'POST',
                uri: 'http://10.1.0.4:12800/api/forecastservice/v1.0.0',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accesstoken
                },
                body: {
                    INID1: 1,
                    INID2: 2,
                    INDATE: '12/28/2013'
                }
                , json: true
            }

            rqforecastdata(ioptions)
                .then(function (response) {
                  //  console.log("The response from forecast service is ::: ", JSON.stringify(response.outputParameters.answer))
                    score = JSON.stringify(response.outputParameters.answer)
                    callback(score)


                })
                .catch(function (err) {
                    console.log("Error Occurred in forecast service !!!", err)
                    score = "error"
                    callback(score)
                })

        })
        .catch(function (err) {
            console.log("Error Occurred !!!", err)

        })

}

//starting forecasting with model parameters

module.exports.getForecastDataParams = function getForecastDataParams(callback, INID1, INID2, INDATE) {
    var setVariables = function setVars() {
        //This function will be passed as a call back later to set the variable scope
        var INID1 = this.INID1;
        var INID2 = this.INID2;
        var INDATE = this.INDATE;
    }

    var accesstoken
    const options = {
        method: 'POST',
        uri: 'http://10.1.0.4:12800/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            username: 'admin',
            password: 'Lz8oq1dn$Lz1'
        }
        , json: true
    }

    //request-promise lets to pass a callback
    rqaccesstoken(options, setVariables)
        .then(function (response) {
           //Token is a bearer token
            accesstoken = "Bearer " + response.access_token
            //set the values to the variables passed from the request parameters
            setVariables();
            const ioptions = {
                method: 'POST',
                uri: 'http://10.1.0.4:12800/api/forecastservice/v1.0.0',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accesstoken
                },
                body: {
                    INID1: parseInt(INID1),
                    INID2: parseInt(INID2),
                    INDATE: INDATE
                }
                , json: true
            }

            rqforecastdata(ioptions)
                .then(function (response) {
                    console.log("The response from forecast service is ::: ", JSON.stringify(response.outputParameters.answer))
                    score = JSON.stringify(response.outputParameters.answer)
                    callback(score)
                })
                .catch(function (err) {
                    console.log("Error Occurred in forecast service !!!", err)
                    score = "error"
                    callback(score)
                })

        })

        .catch(function (err) {
            console.log("Error Occurred !!!", err)

        })

}


