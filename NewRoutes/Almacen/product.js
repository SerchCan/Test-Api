var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var connection = mysql.createConnection(bd);

router.get('/',(req,res,next)=>{
    res.json({error:404, message: "Olvido el parametro [barcode]"});
})
// Find a product in database
router.get('/:barcode',(req,res,next)=>{
    var barcode=req.params.barcode;
    var query="SELECT * FROM almacen WHERE BARCODE=? LIMIT 1 ";
    connection.query(query,[barcode],(error,result)=>{
        if(error){
            res.json({code:404, response:"Not found"});
            throw error;
        }
        res.json({code:200,response:result});
    })
})
module.exports = router;