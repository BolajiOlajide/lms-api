import { Router } from 'express';
import ExpressJoi from 'express-joi-validator';

// controllers
import LoanCtrl from '../controllers/loan.controller';

// schemas
import { signUpSchema, signInSchema } from '../schemas/auth.schema';


const router = Router();

router.route('/')
  .post(ExpressJoi(signUpSchema), LoanCtrl.createLoan)
  .get(LoanCtrl.getAllLoans);

export default router;
