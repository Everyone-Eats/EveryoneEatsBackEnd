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
    let { type, offset, limit } = req.query;
    type = type ? type : undefined;
    offset = offset ? Number(offset) : 0;
    limit = limit ? Number(limit) : 10;
    const numRecords = await User.countDocuments();
    const skipCount = limit * offset;
    const numPages = Math.ceil(numRecords / limit);

    let users;
    if (type) {
      users = await User.find({ type })
        .skip(skipCount)
        .limit(limit);
    } else {
      users = await User.find()
        .skip(skipCount)
        .limit(limit);
    }

    const meta = { numPages, offset, limit };
    res.status(200).json({ users, meta });
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
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
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/?", getAllUsers);

module.exports = router;
