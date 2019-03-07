var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "33060",
    user: "",
    password: "",
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
