const productModel = require("../model/productModel");

module.exports.addProduct = function (req,res) {
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty

    let product = new productModel(
        {
            "productName":productName,"price":price,"qty":qty
        }
    
    )
    product.save(function(err,succes)
    {
        if(err)
        {
            console.log(err);
            res.json({
                "msg":"product not added",
                status:-1,
                data:"SWR"
            })   
        }
        else
        {
            res.json({
                "msg":"product  added Succesfully",
                status:200,
                data:succes
            })
        }
        
    })
}// end of add product 

module.exports.getAllProducts = function(req,res)
{
    productModel.find(function(err,data){
        
        console.log(err);
        if(err)
        {
            res.json({
            "msg":"SWW",
            status:-1,
            data:err
            })
        }
        else
        {
            res.json({
                msg:"Products retrived...",
                status:200,
                data:data
            
            }) 
        }
    })
}// end of getallProducts

module.exports.deleteProduct = function (req,res)
{
    let productId = req.body.productId
    productModel.deleteOne({_id:productId},function(err,data){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"SMW",
                status:-1,
                data:productId
            })
        }
        else
        {
            res.json({
                msg:"Product removed SuccesFully",
                status:200,
                data:data
            })
        }
    })
}//delete product

module.exports.updateProduct = function(req,res)
{
    let productId = req.body.productId
    let price = req.body.price
    let qty = req.body.qty

    productModel.updateOne({_id:productId},{price:price,qty:qty},function(err,success){
        console.log(err);
        if(err)
        {
            res.json({
                "msg":"Some thing went wrong",
                status:-1,
                data:productId

            })
        }
        else
        {
            
            res.json({
                "msg":"Product  Updated",
                status:200,
                data:success

            })
        }
    })//updateone
}//end of update