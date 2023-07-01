const path = require("path");
const express = require("express");
const rootDir = require("../utils/root-directory.util");

const staticFilesHandler = express.static(path.join(rootDir, "src", "public"));

module.exports = staticFilesHandler;