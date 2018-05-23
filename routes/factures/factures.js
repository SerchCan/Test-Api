var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var connection = mysql.createConnection(bd);
//Obtener facturas
router.get('/',(req,res,next)=>{
    query= "SELECT * FROM facturas WHERE MAILSEND=0";
    connection.query(query,(error,result)=>{
        if(error){
            throw error;
        }
        res.json({code:200,response:result});
    });
});

module.exports= router;