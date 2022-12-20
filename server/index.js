require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import { database } from './db';
const mongoose = require('mongoose');

const app = express();
const { DB_HOST, PORT = 8001 } = process.env;

const productsRouter = require('./routes/api/products.ts');

app.use(cors()).use(express.json()).use('/api/products', productsRouter);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server run on port ${PORT}`);
    });
    console.log('Database connected');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
