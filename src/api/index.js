var api = require("./list");

module.exports = function (app) {
    api.forEach((item, index) => {
        var url = item.url;
        var method = item.method ? item.method.toLowerCase() : "get";
        var fn = item.callback;
        console.log(url)
        app[method](url, fn);
    })
}