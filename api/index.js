const express = require('express');
const consign = require('consign');
const app = express();
const port = process.env.PORT || 3000;
let SN = 0;

app.set('json spaces', 4);

consign()
    .include('routes')
    .into(app);

app.listen(port, () => {
    console.log(`This api is running on ${port}`);
});
