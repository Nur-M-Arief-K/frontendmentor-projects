const path = require("path");
const express = require("express");
const rootDir = require("../utils/root-directory.util");

const staticFilesHandler = (dirPath) => {
    return express.static(path.join(rootDir, "src", ...dirPath))
};

module.exports = staticFilesHandler;