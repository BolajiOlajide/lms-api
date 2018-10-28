require('dotenv').config();


module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  },
  charset: 'utf8',
  debug: (process.env.NODE_ENV === 'development')
};
