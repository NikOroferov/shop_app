const { Product } = require("../../models/products");
const createError = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await Product.findById(productId).populate("owner");

    if (!result) {
      throw createError(404, `Product with id ${productId} is not found`);
      return;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
