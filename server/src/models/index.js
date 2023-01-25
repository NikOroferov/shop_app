const { Product, ProductInfo, joiProductSchema } = require("./products");
const {
  User,
  joiUserSchema,
  joiLoginSchema,
  joiUserRoleSchema,
} = require("./user");
const {
  Basket,
  BasketProduct,
  joiBasketSchema,
  joiBasketProductSchema,
} = require("./basket");
const { Brand, TypeBrand, joiBrandSchema } = require("./brand");
const { Type, joiTypeSchema } = require("./type");
const { Raiting, joiRaitingSchma } = require("./raiting");

module.exports = {
  Product,
  ProductInfo,
  joiProductSchema,
  User,
  joiUserSchema,
  joiLoginSchema,
  joiUserRoleSchema,
  Basket,
  joiBasketSchema,
  BasketProduct,
  joiBasketProductSchema,
  Brand,
  TypeBrand,
  joiBrandSchema,
  Type,
  joiTypeSchema,
  Raiting,
  joiRaitingSchma,
};
