const { Product } = require("../../models");

const getAll = async (req, res, next) => {
  const products = await Product.find();
  // { owner: _id }, "", {
  // skip,
  // limit: Number(limit),
  // }
  // .populate("owner");

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

module.exports = getAll;
