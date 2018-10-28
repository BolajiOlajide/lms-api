import { Router } from 'express';
import ExpressJoi from 'express-joi-validator';

// controllers
import BankCtrl from '../controllers/bank.controller';

// schemas
import { createBankSchema, updateBankSchema, deleteBankSchema } from '../schemas/bank.schema';


const router = Router();

router.route('/')
  .post(ExpressJoi(createBankSchema), BankCtrl.createBank)
  .get(BankCtrl.getAllBanks)

router.route('/:bankId')
  .put(ExpressJoi(updateBankSchema), BankCtrl.updateBank)
  .delete(ExpressJoi(deleteBankSchema), BankCtrl.deleteBank);

export default router;
