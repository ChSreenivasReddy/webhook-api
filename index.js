'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var response="";
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    var responseObj={
                   "fulfillmentText": response,
                   "fulfillmentMessages": [{"text": {"text": ["This message from Claim API Service"]}}],
				   "source":""
				  }
    return res.json(responseObj);
});
restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
