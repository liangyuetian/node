var express = require("express");
var path = require("path");
var staticList = require("../config/staticList");

function use(app) {
    if (app) {
        var i = 0;
        var len = staticList.length;
        for (i; i < len; i++) {
            let srcPath = staticList[i];
            app.use(express.static(srcPath));
        }
    }

}
module.exports = use;