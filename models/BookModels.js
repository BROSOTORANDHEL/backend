import pool from "./db.js";

export const getBooks = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
  } catch (e) {
    console.log("getBooks error:", e);
    throw e;
  }
};

export const insertBook = async (title, genre, status) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO tblbook (title, genre, status) VALUES (?, ?, ?)",
      [title, genre, status]
    );
    return result.insertId;
  } catch (e) {
    console.log("insertBook error:", e);
    throw e;
  }
};

export const updateBook = async (title, genre, status, bookId) => {
  try {
    const [result] = await pool.query(
      "UPDATE tblbook SET title = ?, genre = ?, status = ? WHERE id = ?",
      [title, genre, status, bookId]
    );
    return result.affectedRows;
  } catch (e) {
    console.log("updateBook error:", e);
    throw e;
  }
};

export const deleteBook = async (bookId) => {
  try {
    const [result] = await pool.query("DELETE FROM tblbook WHERE id = ?", [bookId]);
    return result.affectedRows;
  } catch (e) {
    console.log("deleteBook error:", e);
    throw e;
  }
};
