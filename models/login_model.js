const express = require("express");
const mysql = require("mysql2/promise")
const con = require("../connectDB");

async function login_verification () {
  const conn = await mysql.createConnection(con);
  let sql = `CALL validate_user();`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}
async function register_user (username, password, first_name, last_name, safe_word) {
  const conn = await mysql.createConnection(con);
  let sql = `CALL register_user("${username}","${password}","${first_name}","${last_name}","${safe_word}")`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}
async function return_password () {
  const conn = await mysql.createConnection(con);
  let sql = `CALL return_password()`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}


module.exports = {
    login_verification,
    register_user,
    return_password
}