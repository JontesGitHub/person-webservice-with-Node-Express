const express = require('express');
const app = express();
const port = 3030;
const database = require('./database')
const PersonController = require('./person/PersonController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/people', PersonController);


app.listen(port, () => console.log(`INFO LOG: Server is running on port ${port}...`));