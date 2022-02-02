import { Router } from 'express';
import {
  createCourse,
  getAllCourses,
  getCourse
} from '../controllers/courseController.js';

const courseRoute = Router();

courseRoute.post('/', createCourse);
courseRoute.get('/',getAllCourses)
courseRoute.get('/:slug_id',getCourse)


export default courseRoute;
