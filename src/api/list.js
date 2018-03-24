var getHome = require("./controller/getHome");
var getUser = require("./controller/getUser");

var List = [
    {
        url: "/",
        method: "get",
        callback: getHome
    },
    {
        url: "/user",
        method: "get",
        callback: getUser
    },
];


module.exports = List;