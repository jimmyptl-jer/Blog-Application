import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  category: [{ type: String, required: true }],
  // image: [{
  //   type: String
  // }],
  date: { type: Date },
  lastUpdate: { type: Date }
})

const Post = mongoose.model('Post', postSchema)

export default Post;