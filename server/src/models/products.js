const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { codeRegExp } = require("../helpers/constants");

const joiProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().required(),
  code: Joi.string().pattern(codeRegExp),
  owner: Joi.string(),
});

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    price: {
      type: Number,
      min: 0.01,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      match: codeRegExp,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = { joiProductSchema, Product };
