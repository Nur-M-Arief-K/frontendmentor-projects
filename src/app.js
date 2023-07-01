const express = require('express');
const routes = require("./routes/index");
const errorHandler = require('./middlewares/errorHandler.middleware');
const staticFilesHandler = require("./middlewares/staticFilesHandler.middleware");

const app = express();

app.use(staticFilesHandler);
app.use(routes);
app.use(errorHandler);

module.exports = app;