import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  gitUrl: {
    type: String
  },
  technology: [
    { type: String }
  ]
})

const Project = mongoose.model('Project', projectSchema);

export default Project;