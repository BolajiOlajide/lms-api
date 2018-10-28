import { Router } from 'express';
import ExpressJoi from 'express-joi-validator';

// controllers
import AuthCtrl from '../controllers/auth.controller';

// schemas
import { signUpSchema, signInSchema } from '../schemas/auth.schema';


const router = Router();

router.route('/signup')
  .post(ExpressJoi(signUpSchema), AuthCtrl.signUp);

router.route('/signin')
  .post(ExpressJoi(signInSchema), AuthCtrl.signIn);

export default router;
