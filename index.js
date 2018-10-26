import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error running app - ${error.message}`);
  }
  console.log(`Server running on port ${PORT}`);
});
