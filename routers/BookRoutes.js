import * as BookController from '../controllers/BookController.js';
import express from 'express';

const router = express.Router();

bookRoutes.get('/all', BookController,fetchBook);

export default bookRoutes;