var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../../config/bd');
var connection = mysql.createConnection(bd);

router.get('/',(req,res,next)=>{
    connection.query("CALL RETURN_CADUC()",(error,result)=>{
        if(error){
            throw error;
        }
        res.json({code:200,response:result[0]});
    });
});

module.exports = router;