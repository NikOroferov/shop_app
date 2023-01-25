const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.post("/");
router.get("/");
router.get("/");

module.exports = router;
