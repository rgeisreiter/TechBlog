const router = require("express").Router();
const homeRoutes = require("./home-routes");
const dashRoutes = require("./dash-routes");
const apiRoutes = require("./api-routes");

router.use("/", homeRoutes);
router.use("/dash", dashRoutes);
router.use("/api", apiRoutes);

module.exports = router;
