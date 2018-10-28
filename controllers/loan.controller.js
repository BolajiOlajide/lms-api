import jwt from 'jsonwebtoken';

// utils
import response from '../utils/response';

// models
import User from '../models/user.model';


const secret = process.env.JWT_SECRET;
const audience = process.env.JWT_AUDIENCE;
const jwtConfig = {
  expiresIn: '24h',
  algorithm: process.env.JWT_ALGO,
  audience,
};


const AuthCtrl = {
  async signUp(req, res) {
    try {
      const newUser = await new User(req.body).save();
      const { password, ...userDetails } = newUser.attributes;

      return jwt.sign(
        userDetails, secret, jwtConfig,
        (err, token) => response(res, 'success', {
        ...userDetails,
        token
      }, 201));
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  },
  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const foundUser = await User
        .where('email', email)
        .fetch();

      const isPasswordValid = await foundUser.compare(password);
      const { password: userPassword, ...userDetails } = foundUser.attributes;

      if (isPasswordValid) {
        return jwt.sign(
          userDetails, secret, jwtConfig,
          (err, token) => response(res, 'success', {
          ...userDetails,
          token
        }, 200));
      }

      return response(res, 'error', 'Username and password doesn\'t match', 400);
    } catch (error) {
      return response(res, 'error', error.message, 400);
    }
  }
};

export default LoanCtrl;
