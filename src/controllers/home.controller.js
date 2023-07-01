const path = require("path");
const rootDir = require("../utils/root-directory.util");

exports.getHome = (req, res, next) => {
    const file = path.join(rootDir, "src", "views", "index.html");
    res.status(200).sendFile(file);
}