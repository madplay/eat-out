const express = require('express');
const app = express();
const cors = require('cors')();
app.use(cors);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const menuDB = require('./db/menu');

app.get('/', (req, res) => {
    const result = {
        data: 'Hello World!'
    };
    res.json(result);
});

app.post('/menu', (req, res) => {
    const name = req.body['name'];
    const restaurant = req.body['restaurant'];
    menuDB.menuRealm.write(() => {
        menuDB.menuRealm.create('menu', {name: name, restaurant: restaurant});
    });
    res.json({
        data: 'success!'
    });
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
});
