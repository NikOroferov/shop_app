const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const { User } = require("../../models");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with email ${email} has alredy existed`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  // const newUser = new User({ name, email });
  // newUser.setPassword(password);
  // newUser.save();

  const result = await User.create({ name, email, password: hashPassword });

  res.status(201).json({
    status: "succes",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = signup;
