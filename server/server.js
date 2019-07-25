const express = require('express');
const cors = require('cors')();

const app = express();
app.use(cors);

app.get('/', function (req, res) {
    const result = {
        data: 'Hello World!'
    };
    res.json(result);
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
});
