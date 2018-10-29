// utils
import response from '../utils/response';

// models
import Bank from '../models/bank.model';


const BankCtrl = {
  async createBank(req, res) {
    try {
      const newBank = await new Bank(req.body).save();

      return response(res, 'success', newBank, 201);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async getAllBanks(req, res) {
    try {
      const banks = await Bank.fetchAll();

      return response(res, 'success', banks);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async updateBank(req, res) {
    try {
      const bank = await Bank.where('id', req.params.bankId).fetch();

      if (!bank) {
        return response(res, 'error', 'Bank doesn\'t exist!', 404);
      }

      const updatedBank = await bank.save(req.body);
      return response(res, 'success', updatedBank);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },

  async deleteBank(req, res) {
    try {
      const bank = await Bank.where('id', req.params.bankId).fetch();

      if (!bank) {
        return response(res, 'error', 'Bank doesn\'t exist!', 404);
      }

      await bank.destroy();

      return response(res, 'success', {}, 204);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  }
};

export default BankCtrl;
