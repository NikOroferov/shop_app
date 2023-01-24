const express = require("express");

const { auth, ctrlWrapper } = require("../../middlewares");
const { usersController: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrentUser));

module.exports = router;
