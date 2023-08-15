
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const roadController = require("./app/http/controller/roadController")


dotenv.config({path : './config.env'})

 const {DATABASE} = process.env
 
  const {DATABASE_PASSWORD} = process.env
  const dbAdress = DATABASE.replace('<PASSWORD>' , DATABASE_PASSWORD)

  const welcomeRouter = require("./app/routes/welcomeRouter")
  const roadRouter = require("./app/routes/roadRouter")
  const roadOptionRouter = require("./app/routes/roadOptionRouter")
  const errorController = require("./app/http/controller/errorController")
  const graphRouter = require("./app/routes/graphRouter")


  



class Application{
  #express = require("express")
  #app = this.#express()
  constructor(PORT , db_url){
    this.configApplication()
    this.configDatabase(db_url)
    this.createRoutes()
    this.createServer(PORT)
    this.errorHandler()
  }
  configApplication(){
    this.#app.use(this.#express.json())
    this.#app.use(this.#express.urlencoded({extended : true}))
    this.#app.use(this.#express.static(path.join(__dirname, 'public')))
  }

  createServer(PORT){
    const server = #app.listen(3000 , () => {
      console.log('server waiting for request');
      
  })
  }

  configDatabase(db_url){
    mongoose.connect(dbAdress).then(() => {
      console.log('app connected to the DataBase');
   })
  }

  errorHandler(){

    this.#app.use((req , res , next) => {
      return res.status(404).json({
        status : 404,
        success : false,
        message : "page is not found!"
      })
    })
    this.#app.use(errorController.errorController)
  }

  createRoutes(){
    this.#app.use("/api/roadsoptions" , roadOptionRouter)
    this.#app.use("/" , welcomeRouter)
    this.#app.use("/api/roads" , roadRouter)
    this.#app.use("/api/graph" , graphRouter)
  }
}