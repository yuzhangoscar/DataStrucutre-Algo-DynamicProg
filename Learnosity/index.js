const Learnosity = require("./node_modules/learnosity-sdk-nodejs/index");
const uuid = require("uuid");
const express = require("express");
const config = require("./config.js");
const path = require('path');


'use strict';
const app = new express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const domain = 'localhost';
const user_id = uuid.v4();

app.get('/', function (req, res) {
    const learnositySdk = new Learnosity(); // Instantiate the SDK
    // Questions API configuration parameters.
    const request = learnositySdk.init(
        'questions',                              // Select Questions API
        // Consumer key and consumer secret are the public & private security keys required to access Learnosity APIs and data. These keys grant access to Learnosity's public demos account. Learnosity will provide keys for your own account.
        {
            consumer_key: config.consumerKey, // Load key from config.js
            domain: domain,
            user_id: user_id                  // Set the domain (from line 20)
        },
        config.consumerSecret,                // Load secret from config.js
        // simple api request object for Questions
        {
            id: 'f0001',
            name: 'Intro Activity - French 101',
            questions: [
                {
                    response_id: '60005',
                    type: 'association',
                    stimulus: 'Match the cities to the parent nation.',
                    stimulus_list: ['London', 'Dublin', 'Paris', 'Sydney'],
                    possible_responses: ['Australia', 'France', 'Ireland', 'England'
                    ],
                    validation: {
                        valid_responses: [
                            ['England'], ['Ireland'], ['France'], ['Australia']
                        ]
                    },
                    instant_feedback: true
                },
                {
                    response_id: '60006',
                    type: 'association',
                    stimulus: 'Match the cities to the parent nation.',
                    stimulus_list: ['London', 'Dublin', 'Paris', 'Sydney'],
                    possible_responses: ['Australia', 'France', 'Ireland', 'England'
                    ],
                    validation: {
                        valid_responses: [
                            ['England'], ['Ireland'], ['France'], ['Australia']
                        ]
                    },
                    instant_feedback: true
                }
            ]
        }

    );

    res.render('questions', { request }); // Render the page and request.
});

app.listen(3000, function () { // Run the web application. Set the port here (3000).
    console.log('Example app listening on port 3000!');
});

// Note: for further reading, the client-side web page configuration can be found in the EJS template: 'docs/quickstart/views/questions.ejs'. //
