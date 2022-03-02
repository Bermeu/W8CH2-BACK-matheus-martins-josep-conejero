require("dotenv").config();
const express = require("express");
const getAllTuits = require("../controllers/tuitsController");

const router = express.Router();

router.get("/", getAllTuits);

module.exports = router;
