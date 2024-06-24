const express = require('express');
const path = require('path');
const Learnosity = require('learnosity-sdk-nodejs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const consumerKey = 'fSqyNLdPzJ1jnnNf';
const consumerSecret = 'OBcZjzzv1AHdSwOrLu0hgYORaUOsrtId0crwn0WJ';
const learnositySdk = new Learnosity();

app.get('/assessment', (req, res) => {
    const request = {
        'user_id': 'demo_student',
        'activity_id': 'your_activity_id',
        'session_id': 'demo_session_id',
        'domain': 'localhost',
        'config': {
            'rendering_type': 'assess',
            'type': 'submit_practice',
            'label_bundle': {
                'save': 'Save',
                'submit': 'Submit'
            },
            'navigation': {
                'show_intro': true,
                'show_outro': true
            },
            'regions': 'main',
            'questionsApiVersion': 'v2'
        }
    };

    const requestData = learnositySdk.init(
        'items',
        {
            'consumer_key': consumerKey,
            'domain': 'localhost',
        },
        consumerSecret,
        request
    );

    res.json(requestData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
