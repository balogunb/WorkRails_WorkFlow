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
    "title": "Services Questionnaire",
    "step1": [{
            "information": "The questions asked in the following pages will help us understand your needs. After completing the questionaire an appropriate Esri representative will contact you to discuss your requirements in more detail.",
        },
        {
            "question": "What can we help you with?",
            "options": [{
                    "string": "Service Packages",
                    "value": 0
                },
                {
                    "string": "Enterprise T&M Consulting",
                    "value": 0
                },
                {
                    "string": "Projects",
                    "value": 0
                },
                {
                    "string": "Managed Services",
                    "value": 0
                },

            ]
        }
        
    ],
    "step2": [{
            "question": "What are your SLA requirements?",
            "options": [{
                    "string": "95%",
                    "value": 6000
                },
                {
                    "string": "99%",
                    "value": 1000
                },
                {
                    "string": "99.5%",
                    "value": 4000
                },
            ],
        },
        {
            "question": "What is the size of the data being hosted?",
            "options": [{
                    "string": "< 1 TB",
                    "value": 6000
                },
                {
                    "string": "1 - 5 TB",
                    "value": 1000
                },
                {
                    "string": "5+ TB",
                    "value": 4000
                },
            ],
        },
        {
            "question": "Are you using any specialty server roles?",
            "options": [{
                    "string": "Image Server",
                    "value": 6000
                },
                {
                    "string": "GeoEvent",
                    "value": 1000
                },
                {
                    "string": "Geoanalytics",
                    "value": 4000
                },
            ],
        }
    ],
    "step3": [{
            "question": "How many concurrent user will be accessing the system?",
            "options": [{
                    "string": "< 10",
                    "value": 6000
                },
                {
                    "string": "10 - 25",
                    "value": 1000
                },
                {
                    "string": "25+",
                    "value": 4000
                },
            ],
        },
        {
            "question": "What is the average \"think time\" a user will spend on the interface before issuing the next request to the service?",
            "options": [{
                    "string": "6+",
                    "value": 6000
                },
                {
                    "string": "3-6",
                    "value": 1000
                },
                {
                    "string": "< 3",
                    "value": 4000
                },
            ],
        },
        {
            "question": "Are there any IT security policies or technology standards that should be considered?",
            "options": [{
                    "string": "No",
                    "value": 6000
                },
                {
                    "string": "SOC II",
                    "value": 1000
                },
                {
                    "string": "FEDRAMP",
                    "value": 4000
                },
            ],
        }
    ]
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