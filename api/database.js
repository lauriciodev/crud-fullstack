import mysql from "mysql";
import pass from "pass.js"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"berlim2062",
  database:"crud-fullstack"
})

export default db;