


const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const welcomeRouter = require("./app/routes/welcomeRouter")
const roadRouter = require("./app/routes/roadRouter")
const roadOptionRouter = require("./app/routes/roadOptionRouter")
const errorController = require("./app/http/controller/errorController")
const graphRouter = require("./app/routes/graphRouter")




app.use("/api/roadsoptions" , roadOptionRouter)
app.use("/" , welcomeRouter)
app.use("/api/roads" , roadRouter)
app.use("/api/graph" , graphRouter)

app.all("*" , (req , res , next) => {
    next({
        status : 400,
        msg : "the route is not defined"
    })
})

app.use(errorController.errorController)





module.exports = app