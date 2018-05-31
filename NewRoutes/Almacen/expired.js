var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var con = mysql.createConnection(bd);

router.get('/',(req,res,next)=>{
    con.query("CALL RETURN_CADUC()",(error,result)=>{
        if(error){
            res.json({code:404, response: "Not found"});
            throw error;
        }
        res.json({code:200, response: result[0]});
    });
});
router.put('/:id',(req,res,next)=>{
    id=req.params.id;
    query="UPDATE ALMACEN SET CANT=0 WHERE ID_A=?";
    con.query(query,[id],(error,result)=>{
        if(error){
            res.json({code:405, response:"Not found"});
            throw error;
        }
        res.json({code:200, response: "Producto vaciado correctamente"});
    })
});

module.exports = router;