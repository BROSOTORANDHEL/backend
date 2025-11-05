import pool from "./db.js";

export const getStudents = async () => {
  const [rows] = await pool.query("SELECT * FROM tblstudent");
  return rows;
};

export const insertStudent = async (srcode, name, course) => {
  const [result] = await pool.query(
    "INSERT INTO tblstudent (srcode, name, course) VALUES (?, ?, ?)",
    [srcode, name, course]
  );
  return result.insertId;
};

export const updateStudent = async (srcode, name, course, studentId) => {
  const [result] = await pool.query(
    "UPDATE tblstudent SET srcode = ?, name = ?, course = ? WHERE id = ?",
    [srcode, name, course, studentId]
  );
  return result.affectedRows;
};

export const deleteStudent = async (studentId) => {
  const [result] = await pool.query(
    "DELETE FROM tblstudent WHERE id = ?",
    [studentId]
  );
  return result.affectedRows;
};
