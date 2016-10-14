const express = require('express');
const body_parser = require('body-parser');


let app = express();

app.use(express.static(__dirname + '/../frontend'));
app.use(body_parser.urlencoded({extended: false}));
app.use(require(__dirname + '/config/router')(express.Router()));


app.listen(8000);
console.log('Server listening on port 8000');

