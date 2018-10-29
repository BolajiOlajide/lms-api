import jwt from 'jsonwebtoken';

// utils
import response from '../utils/response';
import { addDaysToDate } from '../utils/date';

// models
import Loan from '../models/loan.model';


const LoanCtrl = {
  async createLoan(req, res) {
    try {
      const { duration, ...body } = req.body;
      const { id: userId } = req.auth;

      const openingDate = new Date();
      const dueDate = new Date(addDaysToDate(duration));

      const loanPayload = {
        ...body,
        userId,
        openingDate,
        dueDate,
        partialPaymentMade: 0
      };

      const newLoan = await new Loan(loanPayload).save();
      return response(res, 'success', newLoan, 201);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async getUserLoans(req, res) {
    try {
      const { id: userId } = req.auth;

      const userLoans = await Loan.where('userId', userId).fetchAll();

      return response(res, 'success', userLoans);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async updateLoan(req, res) {
    try {
      const loan = await Loan.where('id', req.params.loanId).fetch();

      if (!loan) {
        return response(res, 'error', 'Loan doesn\'t exist!', 404);
      }

      const updatedLoan = await loan.save(req.body);
      return response(res, 'success', updatedLoan);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async deleteLoan(req, res) {
    try {
      const { auth: { id: userId }, params: { loanId } } = req;

      const searchQuery = { userId, id: loanId };

      const loan = await Loan.where(searchQuery).fetch();

      if (!loan) {
        return response(res, 'error', 'Bank doesn\'t exist!', 404);
      }

      await loan.destroy();

      return response(res, 'success', {}, 204);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  }
};

export default LoanCtrl;
