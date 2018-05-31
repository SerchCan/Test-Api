var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var storage = require('./NewRoutes/Almacen/Almacen');
var sales = require('./NewRoutes/Ventas/Venta');
var factures = require('./NewRoutes/Facturas/Facturas');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/storage', storage);
app.use('/api/sales', sales);
app.use('/api/factures', factures);

module.exports = app;
