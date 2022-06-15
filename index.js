const express = require("express")
const session = require("./controller/session")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/signup", session.signup)
app.post("/login", session.login)


app.listen(9090, function () {
    console.log("Server started on 9090");
})