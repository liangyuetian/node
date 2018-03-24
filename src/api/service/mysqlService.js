var mysql = require('mysql');
var jdbc = require("../../config/jdbc");

var mysqlService = function (option = {}, fn, errFn) {
    var connection = mysql.createConnection(jdbc);
    //执行SQL语句
    var query = option.query || "SELECT * FROM user_info";
    connection.query(query, function (err, rows, fields) {
        if (err) {
            errFn && errFn(err);
            return;
        }
        fn && fn(rows, fields);
    });
    //关闭connection
    connection.end(function (err) {
        if (err) {
            return;
        }
        // console.log('关闭数据库连接');
    });
}

module.exports = mysqlService