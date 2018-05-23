var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var connection = mysql.createConnection(bd);

var obtain= require('./obtain/obtain');
var sale= require('./sale/sale');
/* GET listing. */

router.use('/obtain',obtain);
router.use('/sale',sale);

module.exports = router;