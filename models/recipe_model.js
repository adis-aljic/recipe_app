const express = require("express");
const mysql = require("mysql2/promise")
const con = require("../connectDB");

async function new_recipe (recipe_name,type_of_meal,user_id,description) {
  const conn = await mysql.createConnection(con);
  let sql = `CALL new_recipe("${recipe_name}","${type_of_meal}",${Number(user_id)},"${description}");`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}

async function insert_ingridients (recipe_id,ingridient_name,quantity) {
  const conn = await mysql.createConnection(con);
  let sql = `CALL insert_ingridients(${Number(recipe_id)},"${ingridient_name}","${quantity}");`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  return rows
}
async function last_recipe_id () {
  const conn = await mysql.createConnection(con);
  let sql = `CALL last_recipe_id();`;
  const [rows, _] = await conn.execute(sql);
  await conn.end();
  // console.log(rows);
  return rows
}


module.exports = {
    new_recipe,
    insert_ingridients,
    last_recipe_id
}