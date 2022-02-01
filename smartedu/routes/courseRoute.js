import { Router } from 'express';
import {
  createCourse,
  getAllCourses
} from '../controllers/courseController.js';

const courseRoute = Router();

courseRoute.post('/', createCourse);
courseRoute.get('/',getAllCourses)


export default courseRoute;
