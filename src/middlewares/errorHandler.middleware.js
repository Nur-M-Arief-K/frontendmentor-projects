const errorHandler = (error, req, res, next) => {
    res.redirect("/500");
}

module.exports = errorHandler;