



const express = require('express')
const app = express()
const roadController = require("./controller/roadController")
app.use(express.json())

app.get('/api/v1/subway/roads' , roadController.getRoads)

app.post('/post' , roadController.postRoads)
// app.get("/" , (req , res) => {
//     res.send("hellow")
// })





module.exports = app