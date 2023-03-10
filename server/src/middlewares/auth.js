const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;
const { User } = require("../models");

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw new Unauthorized(`User is not authorized`);
    }

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new Unauthorized(`User is not authorized`);
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    throw error;
  }
};

module.exports = auth;
