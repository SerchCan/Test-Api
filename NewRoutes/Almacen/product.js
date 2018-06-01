var express = require('express');
var router = express.Router();
/*
var mysql=require('mysql');
var bd= require('../../config/bd');
var connection = mysql.createConnection(bd);
*/

var pool= require('../../config/bd');

router.get('/',(req,res,next)=>{
    res.json({error:404, message: "Olvido el parametro [barcode]"});
})
// Find a product in database
router.get('/:barcode',async(req,res,next)=>{
    var barcode=req.params.barcode;
    var query="SELECT * FROM almacen WHERE BARCODE=? LIMIT 1 ";
    try{
        const product= await pool.connect();
        const result=product.query(query,[barcode]);
        res.json({code:200,response:result});
        product.release();
    }
    catch(err){
        console.error(err);
        res.json({code:404, response:"Not found"});
    }/*
    connection.query(query,[barcode],(error,result)=>{
        if(error){
            res.json({code:404, response:"Not found"});
            throw error;
        }
        res.json({code:200,response:result});
    })*/
})
module.exports = router;