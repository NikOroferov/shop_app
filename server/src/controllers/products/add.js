const { joiProductSchema, Product } = require("../../models/products");

const add = async (req, res, next) => {
  try {
    const { error } = joiProductSchema.validate(req.body);

    if (error) {
      error.status = 404;
      next(error);

      return;
    }

    const { _id } = req.user;
    const result = await Product.create({ ...req.body, owner: _id });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
