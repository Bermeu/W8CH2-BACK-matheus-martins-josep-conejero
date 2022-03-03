require("dotenv").config();
const express = require("express");
const {
  getAllTuiteros,
  addTuitero,
  deleteTuitero,
  updateTuitero,
} = require("../controllers/tuiterosController");

const router = express.Router();

router.get("/", getAllTuiteros);
router.post("/", addTuitero);
router.delete("/:idTuitero", deleteTuitero);
router.put("/:idTuitero", updateTuitero);

module.exports = router;
