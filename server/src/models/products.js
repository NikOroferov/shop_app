const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const joiProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().required(),
  raiting: Joi.number().default(0),
  img: Joi.string(),
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
    raiting: {
      type: Number,
      required: true,
      default: 0,
    },
    img: {
      type: String,
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false, timestamps: true }
);

const productInfoSchema = Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);
const ProductInfo = model("product_info", productInfoSchema);

module.exports = { joiProductSchema, Product, ProductInfo };
