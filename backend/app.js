const backend = require('./backend_jsforce');
var express = require('express');
var http = require('http');
var jsforce = require('jsforce');
var app = express();
app.set('port', 3001);
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/home', function (req, res) {
    console.log(req.body);
})

//Updates salesforce 
app.post('/update', function (req, res) {
    backend.updateSalesForce(req.body.qId, req.body.cId, req.body.qna);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
})