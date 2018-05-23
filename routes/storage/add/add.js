var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../../config/bd');
var connection = mysql.createConnection(bd);

// Add product to almacen
router.post('/',(req,res,next)=>{
    var barcode= req.body.barcode;
    var producto= req.body.producto;
    var cant= req.body.cant;
    var caducidad= req.body.caducidad;
    var price_u= req.body.price_u;
    var lote= req.body.lote;
    
    var query= "INSERT INTO ALMACEN(BARCODE,PRODUCT, CANT, CADUCIDAD,PRICE_U,LOTE) VALUES(?,?,?,?,?,?)";
    connection.query(query,[barcode,producto,cant,caducidad,price_u,lote],(error,result)=>{
        if(error){
            throw error;
        }
        res.json({message: "Insertado correctamente"});
    })
});

module.exports=router;