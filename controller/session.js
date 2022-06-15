module.exports.signup = function(req,res)
{
    
    let firstname = req.body.firstname
    let email = req.body.email
    let password = req.body.password
    let gender = req.body.gender
    let userId = parseInt(Math.random()*1000)
    
    console.log(req.body)

let users = []

    res.json({
        "UserId":userId,
        "FirstName":firstname,
        "Email":email,
        "Gender":gender,
    })
}

