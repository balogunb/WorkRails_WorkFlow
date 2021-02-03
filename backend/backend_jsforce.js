function updateSalesForce(qId, cId, qna) {
    var jsforce = require('jsforce');
    var conn = new jsforce.Connection();
    require('dotenv').config()
    var pword = process.env.PASSWORD + process.env.TOKEN;
    conn.login(process.env.EMAIL, pword , function (err, res) {
        if (err) {
            console.log('Error Connecting')
            return console.error(err);
        }

        console.log("Attepting Update");



        // Add each repsonse to WorkRails_Responses__c
        var responses = [];
        qna.forEach(function (item) {
            var currRes = {
                Name: "WR_Response" + cId,
                Response__c: item.answer,
                Field_Name__c: item.question,
                Questionnaire__c: qId,
            }

            console.log(currRes);
            responses.push(currRes);
        })
        var job = conn.bulk.createJob("WorkRails_Responses__c", "insert");
        var batch = job.createBatch();
        batch.execute(responses);


        //Check for errors when creating responses
        batch.on("error", function (batchInfo) { // fired when batch request is queued in server.
            console.log('Error, batchInfo:', batchInfo);
        });
        batch.on("queue", function (batchInfo) { // fired when batch request is queued in server.
            console.log('queue, batchInfo:', batchInfo);
            batch.poll(1000 /* interval(ms) */ , 20000 /* timeout(ms) */ ); // start polling - Do not poll until the batch has started
        });
        batch.on("response", function (rets) { // fired when batch finished and result retrieved
            for (var i = 0; i < rets.length; i++) {
                if (rets[i].success) {
                    console.log("#" + (i + 1) + " loaded successfully, id = " + rets[i].id);
                } else {
                    console.log("#" + (i + 1) + " error occurred, message = " + rets[i].errors.join(', '));
                }
            }
        });

        //Create an opportunity
        var opportunity = {
            StageName: 'Proposal/Price Quote',
            CloseDate: '2021-01-03',
            Name: 'Demo Opportunity' + cId
        }

        //Update Opportunity and questionaire 
        conn.sobject("Opportunity").create(opportunity, function (err, ret) {
            if (err || !ret.success) {
                return console.error(err, ret);
            }
            console.log("Created record id : " + ret.id);

            //Update questionare using customer id
            conn.sobject('Questionnaire__c')
                .find({
                    'Customer__c': cId
                })
                .update({
                    Status__c: 'Response Received',
                    Opportunity__c: ret.id
                }, function (err, rets) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(rets);
                });
        });
    });
}

module.exports = {
    updateSalesForce
};




















/**


 
    var accounts = [
    { Name : 'Account #1', ... },
    { Name : 'Account #2', ... },
    { Name : 'Account #3', ... },
    ...
    ];

    var job = conn.bulk.createJob("Account", "insert");
    var batch = job.createBatch();

    batch.execute(accounts);
    batch.on("queue", function(batchInfo) { // fired when batch request is queued in server.
    console.log('batchInfo:', batchInfo);
    batchId = batchInfo.id;
    jobId = batchInfo.jobId;
    // ...
    });




    WorkRails_Responses__c wr = new WorkRails_Responses__c (  Name = 'Testing',  
    Response__c = 'Here is an answer',  
    Field_Name__c = 'Here is a question',  
    Questionnaire__c = 'a2c3t000001qlXgAAI');
    insert wr;
    System.debug('Successfully created wr: ' + wr);

 */