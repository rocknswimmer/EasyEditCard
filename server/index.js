const express = require('express');
const compression = require('compression')
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3172);


console.log('Listening on port 3172');
