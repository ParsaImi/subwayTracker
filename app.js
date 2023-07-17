



const express = require('express')
const app = express()
const roadController = require("./validations/controller/roadController")
app.use(express.json())

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





module.exports = app