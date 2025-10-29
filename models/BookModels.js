import pool from "./db.js";

export const getBook = async () => {
  const [row] = await pool.query("SELECT * FROM tblbook");
  return row;
}

