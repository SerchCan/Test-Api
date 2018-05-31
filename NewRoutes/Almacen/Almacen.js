var express = require('express');
var router = express.Router();


var add = require("./add");
var product = require("./product");
var expired = require("./expired");

/* GET almacen listing. */
router.get('/', (req, res, next)=> {
    res.json({code:404, message:"Page not found"});
});

// Añadir
router.use('/add',add);
// Obtener producto
router.use('/product',product);
// Obtener caducados
router.use('/caduc',expired);


module.exports = router;
