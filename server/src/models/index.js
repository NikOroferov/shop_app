const { Product, joiProductSchema } = require("./products");
const {
  User,
  joiSignupSchema,
  joiLoginSchema,
  joiUserRoleSchema,
} = require("./user");

module.exports = {
  Product,
  joiProductSchema,
  User,
  joiSignupSchema,
  joiLoginSchema,
  joiUserRoleSchema,
};
