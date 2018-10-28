import express from 'express';
import dotenv from 'dotenv';
import logger from 'winston';
import { json as bodyParserJson, urlencoded } from 'body-parser';

// routes
import authRoutes from './routes/auth.route';

// utils
import response from './utils/response';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.use(urlencoded({ extended: true }));
app.use(bodyParserJson());

// add a message for the index route
app.get('/', (req, res) => response(res, 'success', 'Welcome to LMS!', 302));

// specify routes
app.use('/auth', authRoutes);

// boom error handler
app.use((error, req, res, next) => {
  console.log('error ===>', error);
  const { output, message } = error;
  console.log('')
  console.log(output);
  console.log('')
  return error.isBoom ?
    response(res, 'error', output.payload.message, output.statusCode) :
    response(res, 'error', message, 400);
});

app.listen(PORT, (error) => {
  if (error) {
    logger.error(`Error running app - ${error.message}`);
  }
  logger.info(`Server running on port ${PORT}`);
});
