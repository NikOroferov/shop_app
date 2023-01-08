const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().required(),
  amount: Joi.number(),
});

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for product"],
  },
  price: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Product = model("product", productSchema);

module.exports = { joiProductSchema, Product };
