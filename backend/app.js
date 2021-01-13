const backend = require('./backend_jsforce');
var express = require('express');
var http = require('http');
var jsforce = require('jsforce');
var app = express();
app.set('port', 3001);
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));



var data = {
    "step1": {
        "question": "What car are you looking to buy?",
        "options": [{
                "string": "Mercedes",
                "value": 50000
            },
            {
                "string": "Toyota",
                "value": 20000
            },
            {
                "string": "Chevy",
                "value": 30000
            },
            {
                "string": "Dodge",
                "value": 60000
            },
        ],
        "review": "Car cost:"
    },
    "step2": {
        "question": "When do you want it delivered?",
        "review": "Delivery cost:"
    },
    "step3": {
        "question": "Select Additional Features",
        "options": [{
                "string": "Self Driving",
                "value": 6000
            },
            {
                "string": "Chrome Rims",
                "value": 1000
            },
            {
                "string": "WIFI",
                "value": 4000
            },
            {
                "string": "Television",
                "value": 8000
            },
            {
                "string": "Auto Lock",
                "value": 300
            },
            {
                "string": "Stars",
                "value": 9000
            },
        ],
        "review": "Additional Features Cost:"
    }
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/home', function (req, res) {
    console.log(req.body);
})


app.get('/getdata', function (req, res) {
    return res.send(data);
})

//Updates salesforce 
app.post('/update', function (req, res) {
    backend.updateSalesForce(req.body.qId, req.body.cId, req.body.qna);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
})