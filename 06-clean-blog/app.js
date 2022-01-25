import express from "express";
const app = express();

//TEMPLATE ENGINE

app.set('view engine','ejs')

//STATIC FILES

app.use(express.static('public'))

//ROUTES
app.get("/", (req, res) => {

  res.render('index')

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

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
