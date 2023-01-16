const { Product, joiProductSchema } = require("./products");
const { User, joiUserSchema, joiUserRoleSchema } = require("./user");

module.exports = {
  joiProductSchema,
  Product,
  User,
  joiUserSchema,
  joiUserRoleSchema,
};
