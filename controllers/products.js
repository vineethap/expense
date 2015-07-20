var Product = require('../models/product');
 exports.create = function(req,res){
 	var prdt = new Product({
 		Date_of_purchase : req.body.Date_of_purchase,
 		Prdt_name : req.body.Prdt_name,
 		Price :req.body.Price
 	});
    
 	prdt.save(function(err){
 		if(err) res.send(err);
 		res.json({
 			message:"inserted"
 		});
 	});
 }
 exports.list = function(req,res){
 	   Product.find(function(err, data) {
        if (err){
            res.send(err);
        	}
       
       if(data){
        	res.json(data);
        }
        else{
        	res.json({message: 'No such data!' })
        }
    });
 }
 exports.findone = function(req,res,next){

    Product.findOne({ _id: req.params.id}, function(err, products) {
        if (err)
            res.send(err);
        if(products){
            res.json(products);
        }
        else{
            res.json({message: 'No such data!' })
        }
        
    });

 }
 exports.update = function(req,res, next){

  Product.findById(req.params.id, function(err, products) {
        if (err) res.send(err);
     console.log(products);
        if(products){

            for (prop in req.body) {
             products[prop] = req.body[prop];
            }
            
            
        console.log(products);
            products.save(function(err) {
                if (err) res.send(err);

                res.json({ message: 'Products data updated!' });
            });    
            
        } else {
         res.json({ message: 'No such data' });       
        }

     });
};
