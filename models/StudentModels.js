import pool from "./db.js";

export const gettblstudent = async () => {
  const [rows] = await pool.query("SELECT * FROM tblstudent");
  return rows;
}