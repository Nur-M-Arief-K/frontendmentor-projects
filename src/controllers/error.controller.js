const path = require("path");
const rootDir = require("../utils/root-directory.util");

exports.get404 = (req, res, next) => {
    const file = path.join(rootDir, "src", "views", "404.html");
    res.status(404).sendFile(file);
}

exports.get500 = (req, res, next) => {
    const file = path.join(rootDir, "src", "views", "500.html");
    res.status(500).sendFile(file);
}