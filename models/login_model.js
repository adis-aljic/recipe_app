const mysql = require("mysql2")
const con = require("../connectDB");
const db = mysql.createPool(con);
const path = require("path");


  function login_verification (username, password,res) {
      db.query(`CALL validate_user("${username}","${password}")`, (err, data) => {
        if (err) {
                throw err
        }
        else if(data[0].length == 0) 
        {
            res.sendFile(path.join(process.cwd(), 'html/index.html'));
        
        }
        else{
            console.log("sus");
        }
    })

    // db.end()
}




module.exports = {
    login_verification
}