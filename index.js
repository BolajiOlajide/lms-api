import express from 'express';
import dotenv from 'dotenv';
import logger from 'winston';
import { json as bodyParserJson, urlencoded } from 'body-parser';
import expressJwt from 'express-jwt'

// routes
import authRoutes from './routes/auth.route';
import bankRoutes from './routes/bank.route';
import projectRoutes from './routes/project.route';
import loanRoutes from './routes/loan.route';

// utils
import response from './utils/response';
import unprotectedRoutes from './utils/unprotected-routes';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.use(urlencoded({ extended: true }));
app.use(bodyParserJson());

// add a message for the index route
app.get('/', (req, res) => response(res, 'success', 'Welcome to LMS!', 302));

// token middleware
app.use(expressJwt({
  secret: process.env.JWT_SECRET,
  requestProperty: 'auth'
}).unless({ path: unprotectedRoutes }));

// specify routes
app.use('/auth', authRoutes);
app.use('/banks', bankRoutes);
app.use('/projects', projectRoutes);
app.use('/loans', loanRoutes);

// boom error handler
app.use((error, req, res, next) => {
  const { output, message, status } = error;

  return error.isBoom ?
    response(res, 'error', output.payload.message, output.statusCode) :
    response(res, 'error', message, status);
});

app.listen(PORT, (error) => {
  if (error) {
    logger.error(`Error running app - ${error.message}`);
  }
  logger.info(`Server running on port ${PORT}`);
});
