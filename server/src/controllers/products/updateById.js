const { joiProductSchema } = require("../../models");

const updateById = async (req, res, next) => {
  const { productId } = req.params;
  const result = await Contact.findByIdAndUpdate(productId, req.body);

  if (!result) {
    throw createError(404, `Contact with id=${productId} not found`);
    return;
  }

  res.status(200).json({
    message: "contact updated",
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
