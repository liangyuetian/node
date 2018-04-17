var express = require("express");
var path = require("path");
var history = require('connect-history-api-fallback'); // 中间件

var route = require("./src/config/path");
var expressStatic = require("./src/expressStatic");
var middleware = require("./src/middleware");
var loadApiList = require("./src/api");
var compression = require('compression');

var app = express();

app.use(compression()); // 开启gzip
expressStatic(app); // 加载静态资源
middleware(app); // 加载中间件
loadApiList(app);
// app.get("/", function (req, res) {
//     res.sendFile(path.resolve(__dirname, "./index.html"));
// });

// app.get("/show", function (req, res) {
//     res.send("show 请求");
// });

// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get("/ab*cd", function (req, res) {
//     var herf = req.path;

//     res.send(herf);
// });

// app.get("/show/*", function (req, res) {
//     var herf = req.path;

//     res.send(herf);
// });

var server = app.listen(7001, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host, port);
});
