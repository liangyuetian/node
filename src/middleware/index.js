var express = require("express");
var path = require("path");
var route = require("../config/path");
var routeConfig = require("../config/routeList");
var history = require('connect-history-api-fallback'); // 中间件


var historyConfig = {};

var toRoute = routeConfig.toRoute;
historyConfig.rewrites = routeConfig.fromList.map((list, index) => {
    let patten = new RegExp(list);
    return {
        from: patten,
        to: toRoute
    }
});

module.exports = function (app) {
    app.use(history(historyConfig));
}