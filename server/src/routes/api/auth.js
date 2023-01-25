const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { authController: ctrl } = require("../../controllers");
const { joiUserSchema, joiLoginSchema } = require("../../models");

const router = express.Router();

router.post("/signup", validation(joiUserSchema), ctrlWrapper(ctrl.signup));

router.post("/signin", validation(joiLoginSchema), ctrlWrapper(ctrl.signin));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
