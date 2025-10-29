import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const router = express.Router();

StudentRoutes.get('/all', StudentController,fetchtblstudent);

export default StudentRoutes;