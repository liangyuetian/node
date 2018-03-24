var path = require("path");
var Route = require("./path");
var rootPath = Route.rootPath;
module.exports = [
    path.resolve(rootPath, "./static"),
    path.resolve(rootPath, "./public")
]