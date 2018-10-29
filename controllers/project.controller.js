// utils
import response from '../utils/response';

// models
import Project from '../models/project.model';


const ProjectCtrl = {
  async createProject(req, res) {
    try {
      const newProject = await new Project(req.body).save();

      return response(res, 'success', newProject, 201);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async getAllProjects(req, res) {
    try {
      const projects = await Project.fetchAll();

      return response(res, 'success', projects);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  }
};

export default ProjectCtrl;
