var express=require('express');
var router = express.Router();
var pool= require("../../config/bd");

/*
var mysql=require('mysql');
var bd=require("../../config/bd");
var con=mysql.createConnection(bd);
*/

/**
 * Add product to storage
 */
router.post('/',async (req,res,next)=>{
    let barcode= req.body.barcode;
    let producto= req.body.producto;
    let cant= req.body.cant;
    let caducidad= req.body.caducidad;
    let price_u= req.body.price_u;
    let lote= req.body.lote;
    var query="INSERT INTO ALMACEN(BARCODE,PRODUCT, CANT, CADUCIDAD,PRICE_U,LOTE) VALUES(?,?,?,?,?,?)";
    try{    
        const user= await pool.connect();
        const result=await user.query(query,[barcode, producto, cant, caducidad, price_u, lote]);
        res.json({ code: 201, response: "Creado correctamente."});
        user.release();
    } catch(err){
        console.error(err);
        res.json({ code: 404, response: "Not found."})
    }
    /*
    con.query(query, [barcode, producto, cant, caducidad, price_u, lote, query,],(error,result)=>{
        if (error){
            res.json({ code: 404, response: "Not found."})
            throw error;
        }
        res.json({ code: 201, response: "Creado correctamente."});
    })*/
});

module.exports=router;