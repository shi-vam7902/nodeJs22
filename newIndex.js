const express = require("express")
const mongoose = require("mongoose")
const productController = require("./controller/productController")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/royaldb",function(err)
{
    if(err)
    {
        console.log("Something went wrong");
    }
    else{
        console.log("Db connected .....");
    }
})
// server connection
app.listen(9090, function (err) {
    if (err) {
        console.log("SWW");
    }
    else {
        console.log("Server Started on 9090.....")
    }
})
//connection of mongoose to data base


app.post("/addProduct",productController.addProduct)
app.get("/Products",productController.getAllProducts)
app.put("/updateProduct",productController.updateProduct)
app.delete("/delete",productController.deleteProduct)
