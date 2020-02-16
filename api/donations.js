const express = require("express");
const router = express.Router();
import { Donation } from "../db";
import { response } from "express";

const createDonation = async (req, res) => {
  try {
    const donationData = req.body;
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
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
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
