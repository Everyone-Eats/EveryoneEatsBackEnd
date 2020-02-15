const express = require("express");
const router = express.Router();

const test = (req, res) => {
  res.send("idiot check");
};

const createUser = async (req, res) => {};

const updateUser = async (req, res) => {};

const getAllUsers = async (req, res) => {};

const getUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

router.get("/test", test);
router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);
module.exports = router;
