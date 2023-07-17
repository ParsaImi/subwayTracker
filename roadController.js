const Road = require("./models/roadModel")

exports.getRoads = async (req , res ,next) => {
    const roads = await Road.find()
    res.json(roads)
}


exports.postRoads = async (req , res , next) => {
    console.log(req.body);
    const posted = await Road.create()
    res.json({
        msg : "done !"
    })
}