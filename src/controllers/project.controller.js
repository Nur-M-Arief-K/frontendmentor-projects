const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/root-directory.util");

exports.getProject = (req, res, next) => {
    const projectTitle = req.params.projectTitle; //trimmed automatically
    const HTMLFile = path.join(rootDir, "src", "projects", `${projectTitle}`, "index.html");
    const isHTMLFileExist = fs.existsSync(HTMLFile);
    
    if (isHTMLFileExist) {
        res.status(200).sendFile(HTMLFile);
    } else {
        res.redirect("/404");
    }
}