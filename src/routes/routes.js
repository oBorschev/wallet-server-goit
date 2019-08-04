const { Router } = require("express");
const router = Router();
const { getAllCosts, getCostsById } = require("./controller");

router.get("/", function(req, res) {
  res.send("Home page. Make a request to the posts");
});

router.get("/costs", getAllCosts);
router.get("/costs/:id", getCostsById);

// router.get("/costs/:category", function(req, res) {
//   console.dir(req.query.category);
//   console.log("req.params");
// });

module.exports = router;
