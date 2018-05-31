var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var con = mysql.createConnection(bd);

// ventas del día 
router.get('/',(req,res,next)=>{
    query="SELECT * FROM ventas WHERE SALEDATE=CURRENT_DATE()";
    con.query(query,(error,result)=>{
        if(error){
            res.json({code:404, response:"Not found"});    
            throw error;
        }
        res.json({code:200, response:result});
    });
});
// ventas a partir de fecha (DD-MM-YYYY) || (YYYY-MM-DD)
router.get('/:date', (req, res, next)=> {
    var fecha=req.params.date;
    query="SELECT * FROM ventas WHERE SALEDATE>=?"
    con.query(query,[fecha],(error,result)=>{
        if(error){
            res.json({code:404, response:"Not found"});   
            throw error;
        }
        res.json({code:200,response:result});
    });
});
module.exports=router;