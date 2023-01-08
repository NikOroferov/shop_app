const express = require("express");
const createError = require("http-errors");
const { joiProductSchema, Product } = require("../../models/products");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({});

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
});

router.get("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await Product.findById(productId);

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
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiProductSchema.validate(req.body);

    if (error) {
      error.status = 404;
      next(error);

      return;
    }

    const result = await Product.create(req.body);

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
});

router.delete("/:productId", async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
});

router.put("/:productId", async (req, res, next) => {
  try {
    const { error } = joiProductSchema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }

    const { productId } = req.params;
    const result = await Contact.findByIdAndUpdate(productId, req.body);

    if (!result) {
      throw createError(404, `Contact with id=${productId} not found`);
      return;
    }

    res.json({
      message: "contact updated",
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
