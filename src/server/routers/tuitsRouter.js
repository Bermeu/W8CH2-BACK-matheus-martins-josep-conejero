require("dotenv").config();
const express = require("express");
const {
  getAllTuits,
  addTuit,
  deleteTuit,
  updateTuit,
} = require("../controllers/tuitsController");

const router = express.Router();

router.get("/", getAllTuits);
router.post("/", addTuit);
router.delete("/:idTuit", deleteTuit);
router.put("/:idTuit", updateTuit);

module.exports = router;
