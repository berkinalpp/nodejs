import { Router } from 'express';
import {
  getIndexPage,
  getAboutPage,
  getContactPage,
  getCoursesPage,
  getDashboardPage,
  getLoginPage,
  getRegisterPage,
} from '../controllers/pageController.js';

const pageRoute = Router();

pageRoute.get('/', getIndexPage);
pageRoute.get('/about', getAboutPage);
pageRoute.get('/contact', getContactPage);
pageRoute.get('/dashboard', getDashboardPage);
pageRoute.get('/login', getLoginPage);
pageRoute.get('/register', getRegisterPage);

export default pageRoute;
