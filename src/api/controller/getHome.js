var path = require("path");
var route = require("../../config/path");

module.exports = function (req, res) {
    res.sendFile(path.resolve(route.rootPath, "./static/index.html"));
}