import { Router } from 'express';
import ExpressJoi from 'express-joi-validator';

// controllers
import LoanCtrl from '../controllers/loan.controller';

// schemas
import {
  createLoanSchema,
  updateLoanSchema,
  deleteLoanSchema
} from '../schemas/loan.schema';


const router = Router();

router.route('/')
  .post(ExpressJoi(createLoanSchema), LoanCtrl.createLoan)
  .get(LoanCtrl.getUserLoans);

router.route('/:loanId')
  .put(ExpressJoi(updateLoanSchema), LoanCtrl.updateLoan)
  .delete(ExpressJoi(deleteLoanSchema), LoanCtrl.deleteLoan);

export default router;
