var express = require('express');
var router= express.Router();
var prdtController = require('../controllers/products')
 
 router.get('/new',function(req,res){
 	res.json({message:"hi"})
 })
 router.post('/insert',prdtController.create);
 router.get('/find',prdtController.list);

 

router.get('/:id',prdtController.findone);

 router.put('/:id',prdtController.update);

 module.exports = router;
