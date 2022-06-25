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
    let email=req.body.email
    let password=req.body.password
    
    let isCorrect = false;
    let user = undefined
    //authentication
    //console.log(users)
    for(i=0;i<users.length;i++)
    {
        if(users[i].email == email && users[i].password==password)
        {
            user=users[i];
            isCorrect = true;
            break;
        }
    }

    if (isCorrect == true)
        {
            res.json({
                Data:user,
                msg:"Login Done",
                status:200
            })
        }
        else
        {
            res.json({
                data:req.body,
                "message":"Invalid credentials",
                "status":-1
            })
        }
    }
       

module.exports.forgetPass = function(req,res)
{
    let email=req.body.email
    let isCorrect= false;
    let otp=0

    //authentication
    for(i=0;i<users.length;i++)
    {
        console.log("In for",otp)
        if(users[i].email ==email)
        {
            otp=parseInt(Math.random()*1000000);
            console.log("In if",otp)
            users[i].otp =otp;
            isCorrect=true;
            break;
        }
        else
        {
            console.log("In else",otp)
        }
       
    }
    if(isCorrect=true)
    {
        res.json({
            data:otp,
            msg:"Otp sent",
            status:200
        })
    }
    else{
        res.json({
            data:req.body,
            msg:"Invalid email",
            status:-1
        })
    }
}
module.exports.resetPass=function(req,res)
{
    let email=req.body.email
    let isCorrect=false
    let otp = req.body.otp
    let password=req.body.password

    //authentication
    for(i=0;i<users.length;i++)
    {
        console.log("In for",otp)
        if(users[i].email==email && users[i].otp==otp)
        {
            users[i].otp=-12345;
            isCorrect=true;
            users[i].password=password
            console.log("In if",otp)
            break;
        }
        else{
            console.log("else block in if ")
        }
    }
    if(isCorrect=true)
    {
        res.json({
            data:req.body,
            msg:"Password successfully changed",
            status:200
        })
    }
    else
    {
        res.json({
            data:req.body,
            msg:"Invalid data",
            status:-1
        })
    }
}
