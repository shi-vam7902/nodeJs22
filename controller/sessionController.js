const UserModel = require("../model/userModel")
module.exports.signup = function(req,res)
{
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

    console.log(req.body);
    let u ={
        "firstName": firstName,
        "LastName":lastName,
        "email":email,
        "password":password
    }
    
    let user = new UserModel(u)

    user.save(function (err,success) {
        if(err)
        {
            res.json({
                status:-1,
                msg:"SMW",
                data:err
            })
        }
        else
        {
            res.json({
                status:200,
                msg:"User Added SuccessFully",
                data:success      
            })
        }
        
    })



}
module.exports.getAllUsers = function(req,res){
    UserModel.find(function (err,data) {
        if(err)
        {
            res.json({
                status:-1,
                msg:"SMW",
                data:err
            })
        }else
        {
            res.json({
                status:200,
                msg:"user retrived",
                data:data

            })
        }
        
    })
}
