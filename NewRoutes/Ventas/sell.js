var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var bd= require('../../config/bd');
var con = mysql.createConnection(bd);

/**
 * Sell product
 */
router.post('/',(req,res,next)=>{
    var barcode= req.body.barcode;
    var cant= req.body.cant;
    // Reduce del almacen
    query="SELECT * FROM ALMACEN WHERE BARCODE=? AND CANT>0 ORDER BY LOTE ASC";
    // Inserta a tabla ventas
    con.query("CALL INSERT_SALE(?,?)",[barcode,cant],(error,result)=>{
        if(error){
            res.json({code:error, message: "Ocurrio un error al procesar venta" })
            throw error;
        }
        con.query(query,[barcode],(error,result)=>{
            if(error){
                throw error;
            }
            var quantity=[];
            var lote=[]
            for(var i=0;i<result.length;i++){
                lote.push(result[i].LOTE);
                if(result[i].CANT<cant){
                    quantity.push(0);
                }else{
                    quantity.push(result[i].CANT-cant)
                }
                cant-=result[i].CANT;
            }
            for(var i=0;i<quantity.length;i++)
            {
                sql="UPDATE ALMACEN SET CANT=? WHERE BARCODE=? AND LOTE=?";
                con.query(sql,[quantity[i],result[i].BARCODE,lote[i]],(error,result)=>{
                    if(error){
                        throw error;
                    }
                });
            }
            res.json({code:201, message: "Vendido correctamente"});
        });     
    });
    
});

module.exports = router;