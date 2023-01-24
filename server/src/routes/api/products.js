const express = require("express");

const { productsController: ctrl } = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiProductSchema } = require("../../models");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiProductSchema), ctrlWrapper(ctrl.add));

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

router.put("/:id", validation(joiProductSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
