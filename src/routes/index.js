const express = require("express");
const homeRoutes = require("./home.route");
const router = express.Router();

router.use(homeRoutes);

module.exports = router;