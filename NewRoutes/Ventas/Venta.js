var express = require('express');
var router = express.Router();

var get= require('./get');
var sell= require('./sell');

/* GET listing. */
router.get('/', (req, res, next)=> {
    res.json({code:404, message:"Bad gateway"});
});
router.use('/get/',get);
router.use('/sell/',sell);

module.exports = router;