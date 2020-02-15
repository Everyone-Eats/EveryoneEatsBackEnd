const express = require("express");
const router = express.Router();

const createDonation = async (req, res) => {};

const updateDonation = async (req, res) => {};

const getAllDonations = async (req, res) => {};

const getDonation = async (req, res) => {};

const deleteDonation = async (req, res) => {};

router.post("/", createDonation);
router.put("/:id", updateDonation);
router.delete("/:id", deleteDonation);
router.get("/:id", getDonation);
router.get("/", getAllDonations);

module.exports = router;
