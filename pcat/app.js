import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import Photo from './models/Photo.js';
import {
  getAllPhotos,
  getPhoto,
  createPhoto,
  updatePhoto,
  deletePhoto,
} from './controllers/photoController.js';
import methodOverride from 'method-override';
import {
  getAboutPage,
  getAddPage,
  getEditPage,
} from './controllers/pageController.js';

const app = express();

//CONNECT DATABASE

mongoose.connect(
  'mongodb+srv://berkinalpp:2e33fdf44567@pcat-cluster.uuy0m.mongodb.net/pcat-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log('MongoDB Connected !');
  }
);

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(fileUpload());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES

app.get('/', getAllPhotos);
app.get('/photo/:id', getPhoto);
app.post('/photos', createPhoto);
app.put('/photos/:id', updatePhoto);
app.delete('/photos/:id', deletePhoto);

app.get('/about', getAboutPage);

app.get('/add', getAddPage);

app.get('/photo/edit/:id', getEditPage);

//LISTEN SERVER PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port} port`);
});
