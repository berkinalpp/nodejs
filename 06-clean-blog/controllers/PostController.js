import Post from '../models/Post.js'

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();
  res.redirect(`/post/${post._id}`);
};

export const deletePost = async(req,res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

export const createPost = async(req, res) =>{
    await Post.create(req.body)
    res.redirect('/')
}