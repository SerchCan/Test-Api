var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var add = require("./add/add");
var find = require("./find/find");
var expired = require("./expired/expired");

/* GET almacen listing. */
router.get('/', (req, res, next)=> {
    res.json({message:"No puede obtener todo el almacén"});
});

// Añadir
router.use('/add',add);
// Obtener producto
router.use('/product',find);
// Obtener caducados
router.use('/expired',expired);


module.exports = router;
