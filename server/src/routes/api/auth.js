const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { authController: ctrl, authController } = require("../../controllers");
const { User, joiSignupSchema, joiLoginSchema } = require("../../models");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/signin", validation(joiLoginSchema), ctrlWrapper(ctrl.signin));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
