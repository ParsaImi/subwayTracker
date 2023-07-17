const { route } = require("../app")
const RoadController = require("../controller/roadController")
const router = express.Router()
router.get("/getLines" , RoadController.getRoads)