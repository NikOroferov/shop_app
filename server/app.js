require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const productsRouter = require("./src/routes/api/products");
const authRouter = require("./src/routes/api/auth");
const usersRouter = require("./src/routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app
  .use(logger(formatsLogger))
  .use(cors())
  .use(express.json())
  .use("/api/products", productsRouter)
  .use("/api/auth", authRouter)
  .use("/api/users", usersRouter)
  .use((req, res) => {
    res.status(404).json({ message: "Not found" });
  })
  .use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message: err.message });
  });

module.exports = app;
