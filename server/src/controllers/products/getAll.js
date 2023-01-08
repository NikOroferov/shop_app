const { Product } = require("../../models/products");

const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const products = await Product.find({ owner: _id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner");

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: products,
      },
    });
  } catch (error) {
    next(error);
  }
};
