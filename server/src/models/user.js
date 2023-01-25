const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const bcrypt = require("bcrypt");
const { USER_ROLE, emailRegExp } = require("../helpers/constants");

const joiUserSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string()
    .valid(USER_ROLE.admin, USER_ROLE.user)
    .default(USER_ROLE.user),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const joiUserRoleSchema = Joi.object({
  role: Joi.string()
    .valid(USER_ROLE.admin, USER_ROLE.user)
    .default(USER_ROLE.user)
    .required(),
});

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegExp,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    // token: {
    //   type: String,
    //   default: null,
    // },
    role: {
      type: String,
      enum: [USER_ROLE.admin, USER_ROLE.user],
      default: USER_ROLE.user,
    },
  },
  { versionKey: false, timestamps: true }
);

// userSchema.methods.setPassword = function (password) {
//   this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };

// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

const User = model("user", userSchema);

module.exports = {
  User,
  joiUserSchema,
  joiLoginSchema,
  joiUserRoleSchema,
};
