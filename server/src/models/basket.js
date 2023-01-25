const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiBasketSchema = Joi.object({
  user_id: Joi.string(),
});

const joiBasketProductSchema = Joi.object({
  product_id: Joi.string(),
  basket_id: Joi.string(),
});

const basketSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const basketProductSchema = Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    basketId: {
      type: Schema.Types.ObjectId,
      ref: "basket",
    },
  },
  { versionKey: false, timestamps: true }
);

const Basket = model("basket", basketSchema);
const BasketProduct = model("basket_product", basketProductSchema);

module.exports = {
  Basket,
  BasketProduct,
  joiBasketSchema,
  joiBasketProductSchema,
};
