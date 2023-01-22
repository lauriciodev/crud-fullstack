import mysql from "mysql";

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"berlim2062",
  database:"crud-fullstack"
})

export default db;