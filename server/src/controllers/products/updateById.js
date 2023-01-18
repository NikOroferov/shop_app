const { NotFound } = require("http-errors");
const { Product } = require("../../models");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }

  res.status(200).json({
    message: "product updated",
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
