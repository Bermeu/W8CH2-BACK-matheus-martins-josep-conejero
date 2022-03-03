require("dotenv").config();
const Tuitero = require("../../database/models/Tuitero");

const getAllTuiteros = async (req, res) => {
  const tuiteros = await Tuitero.find();
  res.json({ tuiteros });
};

const addTuitero = async (req, res, next) => {
  try {
    const tuitero = req.body;
    const newTuitero = await Tuitero.create(tuitero);
    res.status(201).json(newTuitero);
  } catch (error) {
    next(error);
  }
};

const deleteTuitero = async (req, res, next) => {
  const { idTuitero } = req.params;
  try {
    const tuitero = await Tuitero.findByIdAndDelete(idTuitero);
    if (tuitero) {
      res.json(idTuitero);
    } else {
      const error = new Error("Tuit not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const updateTuitero = async (req, res, next) => {
  const { idTuitero } = req.params;
  try {
    const tuitero = req.body;
    const updatedTuitero = await Tuitero.findByIdAndUpdate(idTuitero, tuitero);
    res.status(200).json(updatedTuitero);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTuiteros,
  addTuitero,
  deleteTuitero,
  updateTuitero,
};
