const mysql = require("mysql2/promise")
const con = require("../connectDB");
const db = mysql.createConnection(con)

 async function login_verification (username, password) {
   const response = await db.query(`CALL validate_user("${username}","${password}")`, (err, data) => {
        if (err) {
            throw err
        }
        
        return data
    })
    return  response
}



module.exports = {
    login_verification
}