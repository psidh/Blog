import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  subtitle: {
    type: String,
    required: [true, "subtitle is required."],
  },
  content: {
    type: String,
    required: [true, "content  is required."],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
