var mongoose= require('mongoose');
var productSchema = mongoose.Schema({
	Date_of_purchase :Date,
	Prdt_name : String,
	Price : Number

});
module.exports=mongoose.model('Product',productSchema);