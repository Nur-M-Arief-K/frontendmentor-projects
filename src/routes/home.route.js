const express = require("express");
const { getHome } = require("../controllers/home.controller");
const { get404, get500 } = require("../controllers/error.controller");

const router = express.Router();

router.get("/", getHome);
router.use(get404);
router.use(get500);

module.exports = router;