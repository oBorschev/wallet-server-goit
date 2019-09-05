const { Router } = require("express");
const router = Router();
const controller = require("./controller");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

router.get("/", function(req, res) {
  res.send("Home page. Make a request to the posts");
});
router.post("/costs", jsonParser, controller.createCost);
router.get("/costs", controller.getCost);
router.get("/costs/:id", controller.getCostsById);
router.patch("/costs/:id", jsonParser, controller.patchCost);
router.delete("/costs/:id", controller.deleteCost);

module.exports = router;
