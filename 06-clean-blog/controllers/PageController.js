import Post from "../models/Post.js";

export const getIndexPage = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
};

export const getPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
};

export const getAddPage = (req, res) => {
  res.render("add_post");
};

export const getAboutPage = (req, res) => {
  res.render("about");
};

export const getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit_post", { post });
};
