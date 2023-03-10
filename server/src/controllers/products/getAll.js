const { Product } = require("../../models");

const getAll = async (req, res) => {
  // const { _id } = req.user;
  // const { page = 1, limit = 5 } = req.query;
  // const skip = (page - 1) * limit;

  const products = await Product.find();
  //   { owner: _id }, "", {
  //   skip,
  //   limit: Number(limit),
  // }).populate("owner", "_id name email");

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

module.exports = getAll;
