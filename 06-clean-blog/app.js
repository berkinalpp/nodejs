import express from "express";
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import { createPost, deletePost, updatePost } from "./controllers/PostController.js";
import { getAboutPage, getAddPage, getIndexPage, getPostPage , getEditPage } from "./controllers/PageController.js";


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
app.use(methodOverride('_method' , {
  methods:['POST','GET']
}))

//ROUTES
app.get("/", getIndexPage);
app.get("/post/:id", getPostPage);
app.get("/add_post", getAddPage);
app.get("/about", getAboutPage);
app.get("/post/edit/:id" , getEditPage)
app.post('/posts',createPost)
app.put('/posts/:id', updatePost)
app.delete('/posts/:id', deletePost)




app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
