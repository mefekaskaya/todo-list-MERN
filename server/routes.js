const router = require("express").Router();
const controllers = require("./controllers");

router.post("/", controllers.create);

module.exports = router;
