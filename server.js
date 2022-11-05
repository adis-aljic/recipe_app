const express = require("express");
const con = require("./connectDB");
const mysql = require("mysql2")
const app = express()
const login_page = require(`./router/login_page`)

app.use(express.json())
app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: true
}));

PORT = 3000;
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));

const db = mysql.createConnection(con)
db.connect((err) => (err) ? err : console.log("database is connected"));
app.use(`/`,login_page);