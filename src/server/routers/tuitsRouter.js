require("dotenv").config();
const express = require("express");
const {
  getAllTuits,
  addTuit,
  deleteTuit,
} = require("../controllers/tuitsController");

const router = express.Router();

router.get("/", getAllTuits);
router.post("/", addTuit);
router.delete("/:idTuit", deleteTuit);

module.exports = router;
