import updateSalesForce from './backend_jsforce';



function test() {
    
    var qId = 'a2c3t000001qlXgAAI';
    var cId = '645'


    var res = [{
            question: 'What modules are you looking to implement?',
            answer: '$500'
        },
        {
            question: 'When are you expecting delivery?',
            answer: '$1000'
        },
        {
            question: 'What resources do you believe you would need?',
            answer: '$300'
        }
    ]


    updateSalesForce(qId, cId, res);
}

test();