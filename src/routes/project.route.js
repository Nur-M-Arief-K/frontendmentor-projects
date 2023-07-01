const express = require("express");
const { getProject } = require("../controllers/project.controller");

const router = express.Router();

router.get("/:projectTitle", getProject);

module.exports = router;