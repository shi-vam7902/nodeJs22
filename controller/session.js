module.exports.signup = function(req,res)
{
    
    let firstname = req.body.firstname
    let email = req.body.email
    let password = req.body.password
    let gender = req.body.gender
    
    
    // console.log(req.body)
    // console.log(users)
    
let users = [
    // {
    //     userId : userId,
    //     firstname: 'sita',
    //     email: 'sita@ram.com',
    //     gender: 'male',
    //     password: 'sita'
    // },
    // {
        
    //     userId : userId,
    //     firstname: 'ram',
    //     email: 'ram@sita.com',
    //     gender: 'Female',
    //     password: "ram"
    // }
]
let errorMsg = []
    let isError = false
    //validation email
    if(email == undefined || email.trim().length == 0)
    {
        isError = true
        console.log("in validate")
        errorMsg.push({
            "EmailError":"Please Enter Email"
        })
    }
    //validation passward
    if(password == undefined &&  password.trim().length == 0)
    {
        isError = true
        errorMsg.push({
            "PasswordError":"Please Enter Password"
        })
    }

    if(isError == true)
    {
        res.json({
            "Error":errorMsg,
            "Message":"Please Solve the Error",
            "Status":-1
            
        })
    }
    else
    {
        let userId = parseInt(Math.random()*1000)
        users.push({
            "Userid":userId,
            "firstname":firstname,
            "email":email,
            "gender":gender,
            "password":password
        })
        console.log(users)
        console.log(errorMsg)
        res.json({
            "Message":"Signup Done Successfully",
            "status":200,
            "data":req.body
            
        })
    }
}
module.exports.login = function(req,res)
{
    let email = req.body.email
    let password = req.body.password

    //authentication
    let user = undefined
    let isBingo = false
    
    for(i = 0 ; i<users.length ;i++)
    {
        if(users[i].email == email && users[i].password == password)
        {
            user = users[i]
            isBingo = true
            break;
        }
    }
    if(isBingo == true)
    {
        res.json({
            "msg":"Login Done",
            "data":user,
            status:-1,
        })
    }
    else{
        res.json({
            "msg":"invalid Credentials",
            "data":user,
            status:-1
        })
    }
}

