import { Router } from 'express';
import ExpressJoi from 'express-joi-validator';

// controllers
import ProjectCtrl from '../controllers/project.controller';

// schemas
import { createProjectSchema } from '../schemas/project.schema';


const router = Router();

router.route('/')
  .post(ExpressJoi(createProjectSchema), ProjectCtrl.createProject)
  .get(ProjectCtrl.getAllProjects);

export default router;
