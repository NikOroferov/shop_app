const { Product } = require("../../models");

const deleteById = async (req, res, next) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndRemove(productId);

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
};

module.exports = deleteById;
