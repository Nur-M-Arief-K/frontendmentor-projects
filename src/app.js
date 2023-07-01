const express = require('express');
const routes = require("./routes/index");
const errorHandler = require('./middlewares/errorHandler.middleware');
const staticFilesHandler = require("./middlewares/staticFilesHandler.middleware");

const app = express();

app.use("/projects", staticFilesHandler(["projects"]));
app.use("/public", staticFilesHandler(["public"]));
app.use(routes);
app.use(errorHandler);

module.exports = app;