const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/donations", require("./donations"));

module.exports = router;
