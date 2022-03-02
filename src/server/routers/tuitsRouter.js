require("dotenv").config();
const express = require("express");
const { getAllTuits, addTuit } = require("../controllers/tuitsController");

const router = express.Router();

router.get("/", getAllTuits);
router.post("/", addTuit);

module.exports = router;
