const express = require("express");
const con = require("./connectDB");
const mysql = require("mysql2")
const app = express()
const login_page = require(`./router/login_page`)
const home_page = require(`./router/home_page`)
const recipe_page = require(`./router/recipe_page`)

app.use(express.json())
app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: true
}));
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went  wrong",
    });
  });
PORT = 3000;
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));

const db = mysql.createConnection(con)
db.connect((err) => (err) ? err : console.log("database is connected"));
app.use("/",home_page)
app.use(`/user`,login_page);
app.use(`/recipe`,recipe_page);
