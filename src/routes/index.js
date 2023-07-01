const express = require("express");
const homeRoutes = require("./home.route");
const projectRoutes = require("./project.route");
const { get404, get500 } = require("../controllers/error.controller");

const router = express.Router();

router.use(homeRoutes);
router.use("/projects", projectRoutes);
router.use(get404);
router.use(get500);

module.exports = router;