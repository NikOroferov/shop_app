const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const { DB_HOST } = process.env;

export const database = () =>
  mongoose
    .connect(DB_HOST)
    .then(() => console.log('Database connect'))
    .catch(error => {
      console.log(error.message);
      process.exit(1);
    });
