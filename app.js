var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var storage = require('./routes/storage/storage');
var sales = require('./routes/sales/sales');
var factures = require('./routes/factures/factures');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/storage', storage);
app.use('/api/sales', sales);
app.use('/api/factures', factures);

module.exports = app;
