import express from "express";
import mongoose from 'mongoose'
import Post from './models/Post.js'
const app = express();

//MONGODB CONNECT
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db' , (err) => {
  if(err) console.log(err)

  console.log('MongoDB Connected')
})


//TEMPLATE ENGINE

app.set('view engine','ejs')

//MIDDLEWARES

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//ROUTES
app.get("/", async(req, res) => {
  const posts = await Post.find({})
  res.render('index' , {posts})

});

app.get("/post", (req, res) => {

  res.render('post')

});

app.get("/add_post", (req, res) => {

  res.render('add_post')

});

app.get("/about", (req, res) => {

  res.render('about')

});

app.post('/posts',async(req, res) =>{
    await Post.create(req.body)
    res.redirect('/')
})



app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
