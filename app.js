



const express = require('express')
const path = require('path')
const app = express()
const roadController = require("./app/http/controller/roadController")
const errorController = require("./app/http/controller/errorController")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/subway/roads' , roadController.getRoads)

app.post('/post' , roadController.postRoads)
app.all("*" , (req , res , next) => {
    next({
        status : 400,
        msg : "the route is not defined"
    })
})
// app.get("/" , (req , res) => {
//     res.send("hellow")
// })
app.use(errorController.errorController)





module.exports = app