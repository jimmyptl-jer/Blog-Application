import express from 'express';
import Project from '../Models/project.model.js';
import { errorHandler } from '../Utils/Error.js';

const router = express.Router();

router.post('/createProject', async (req, res, next) => {
  try {
    const { title, description, gitUrl, technology } = req.body;

    if (!title || !description || !gitUrl || !technology) {
      return next(errorHandler(400, 'All fields are required'));
    }

    const technologiesArray = technology.split(',').map((tech) => tech.trim());

    const newProject = new Project({
      title,
      description,
      gitUrl,
      technology: technologiesArray,
    });

    await newProject.save();

    // Respond with success message
    res.status(201).json({
      message: 'Project added successfully',
    });
  } catch (error) {
    next(errorHandler(500, 'Sorry! Something went wrong'));
  }
});

router.get('/getProjects', async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    next(errorHandler(500, 'Failed to fetch projects'));
  }
});

export default router;