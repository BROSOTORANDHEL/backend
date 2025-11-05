import express from "express";
import { fetchBooks, createBook, editBook, deleteBook } from "../controllers/BookController.js";

const router = express.Router();

router.get("/all", fetchBooks);
router.post("/new", createBook);
router.put("/edit/:bookId", editBook);
router.delete("/delete/:bookId", deleteBook);

export default router;
