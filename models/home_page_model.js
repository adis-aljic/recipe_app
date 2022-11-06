const express = require("express");
const mysql = require("mysql2/promise")
const con = require("../connectDB");

async function results_recipe () {
  const conn = await mysql.createConnection(con);
  let sql = `CALL get_recipe();`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}



module.exports = {
    results_recipe
}