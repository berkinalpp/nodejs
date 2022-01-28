import Photo from '../models/Photo.js';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const getAllPhotos = async (req, res) => {
  const page = req.query.page || 1
  const photosPerPage = 2
  const totalPhotos = await Photo.find({}).countDocuments()

  const photos = await Photo.find({})
  .sort('-dateCreated')
  .skip((page-1) * photosPerPage)
  .limit(photosPerPage)

  res.render('index', {
    photos,
    current:page,
    pages: Math.ceil(totalPhotos / photosPerPage)

  });
};

export const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', { photo });
};

export const createPhoto = async (req, res) => {
  let uploadedImg = req.files.image;
  let uploadPath = __dirname + '/public/img/' + uploadedImg.name;

  uploadedImg.mv(uploadPath, async (err) => {
    if (err) console.log(err);
    await Photo.create({
      ...req.body,
      image: '/img/' + uploadedImg.name,
    });
    res.redirect('/');
  });
};

export const updatePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  photo.title = req.body.title;
  photo.description = req.body.description;
  await photo.save();
  res.redirect(`/photo/${photo._id}`);
};

export const deletePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  const deletedImg = __dirname + '/public' + photo.image;
  fs.unlinkSync(deletedImg);

  await Photo.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
