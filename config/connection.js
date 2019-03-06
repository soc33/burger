var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password5",
    database: "burger_db"
});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId)
});


// exporting this to the ORM
module.exports = connection;
