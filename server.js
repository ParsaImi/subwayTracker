const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const roadController = require("./app/http/controller/roadController")
console.log(roadController);

dotenv.config({path : './config.env'})

 const {DATABASE} = process.env
 
  const {DATABASE_PASSWORD} = process.env
  const dbAdress = DATABASE.replace('<PASSWORD>' , DATABASE_PASSWORD)


  mongoose.connect(dbAdress).then(() => {
     console.log('app connected to the DataBase');
  })

const server = app.listen(7000 , () => {
    console.log('server waiting for request');
    
})