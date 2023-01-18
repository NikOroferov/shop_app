const { Product } = require("../../models");
const { NotFound } = require("http-errors");

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);

  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
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
