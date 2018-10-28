// utils
import response from '../utils/response';

// models
import User from '../models/user.model';


const AuthCtrl = {
  async signUp(req, res) {
    try {
      // const { firstname, surname, email, password } = req.body;

      const newUser = await User(req.body).save();

      return response(res, 'success', newUser, 201);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  }
};

export default AuthCtrl;
