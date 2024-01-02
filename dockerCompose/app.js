const express = require("express");

const app = new express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});

app.get('/customers', (req, res) => {
    res.send({
        id: 1,
        name: 'james'
    });
});
