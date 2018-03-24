var mysqlService = require("../service/mysqlService");

module.exports = function (req, res) {
    var mysqld = new mysqlService({
        query: "SELECT * FROM user_info"
    }, function (result, fields) {
        console.log("结果：", result, fields)
        res.send(result);
    });
}