import { Router } from 'express';
import {
  createCategory,
 } from '../controllers/categoryController.js';

const categoryRoute = Router();

categoryRoute.post('/', createCategory);



export default categoryRoute;
