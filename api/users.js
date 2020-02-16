const express = require("express");
const router = express.Router();
const { User } = require("../db");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await new User(userData).save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedData = req.body;
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, updatedData);
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(2);
    res.status(200).json(users);
  } catch (err) {
    console.log("in err");
    res.setStatus(400);
    console.log(err);
  }
};

const getUser = async (req, res) => {
  console.log("hi");
  try {
    const { id } = req.params;
    console.log("here");
    const users = await User.findById(id);
    console.log("here");
    res.status(200).json(users);
  } catch (err) {
    res.setStatus(400);
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete(":/id", deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);

module.exports = router;
