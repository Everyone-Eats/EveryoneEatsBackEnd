const express = require("express");
const router = express.Router();
const { Donation } = require("../db");
const { User } = require("../db");

const createDonation = async (req, res) => {
  try {
    const donationData = req.body;
    const donorId = req.body.donor;
    const donor = await User.findById(donorId);
    donationData.donor = donor;
    const newDonation = await new Donation(donationData);
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const updateDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedDonation = await Donation.findByIdAndUpdate(id, updatedData);
    res.status(201).json(updatedDonation);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const getAllDonations = async (req, res) => {
  let offset = 0;
  let limit = 10;

  if (req.query.limit) {
    limit = Number(req.query.limit);
  }
  if (req.query.offset) {
    offset = Number(req.query.offset);
  }

  const numRecords = User.countDocuments();
  const skipCount = limit * offset;
  const numPages = Math.ceil(numRecords / limit);

  try {
    const donations = await Donation.find()
      .skip(skipCount)
      .limit(limit);
    const meta = { numPages, offset, limit };
    res.status(200).json({ donations, meta });
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const getDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findById(id);
    res.status(200).json(donation);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;
    await Donation.findByIdAndDelete(id);
    res.status(204);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

router.post("/", createDonation);
router.put("/:id", updateDonation);
router.delete("/:id", deleteDonation);
router.get("/:id", getDonation);
router.get("/", getAllDonations);

module.exports = router;
