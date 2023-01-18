const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { authController: ctrl } = require("../../controllers");
const { User, joiSignupSchema, joiLoginSchema } = require("../../models");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/signin", validation(joiLoginSchema), ctrlWrapper(ctrl.signin));

module.exports = router;
