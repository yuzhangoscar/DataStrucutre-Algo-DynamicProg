const URLs = ['https://www.google.com', 'https://www.github.com'];
const axios = require('axios');

const requestServerFromMultipleURLs = () => {
    const requestFromSingleURL = url => axios(url);
    const promises = URLs.map(requestFromSingleURL);

    Promise.all(promises).then(
        responses => responses.forEach(response => console.log(response.headers.server))
    );
}

requestServerFromMultipleURLs();
