const express = require("express")
const session = require("./controller/session")
const sessionController = require("./controller/sessionController")
const mongoose = require('mongoose');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// mongo db connect 
mongoose.connect("mongodb://localhost:9090/royaldb",function(err)
{
    if(err)
    {
        console.log("SomeThing went Wrong");
        console.log(err)
    }
    else
    {
        console.log("Db connected ....");
    }
})

app.post("/signup", session.signup)
app.post("/login", session.login)
app.post("/register",sessionController.signup)
app.get("/getAllUsers",sessionController.getAllUsers)

app.listen(9090, function () {
    console.log("Server started on 9090");
})