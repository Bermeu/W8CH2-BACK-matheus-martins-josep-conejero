require("dotenv").config();
const Tuit = require("../../database/models/Tuit");

const getAllTuits = async (req, res) => {
  const tuits = await Tuit.find();
  res.json({ tuits });
};

const addTuit = async (req, res, next) => {
  try {
    const tuit = req.body;
    const newTuit = await Tuit.create(tuit);
    res.status(201).json(newTuit);
  } catch (error) {
    next(error);
  }
};

const deleteTuit = async (req, res, next) => {
  const { idTuit } = req.params;
  try {
    const tuit = await Tuit.findByIdAndDelete(idTuit);
    if (tuit) {
      res.json(idTuit);
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

const updateTuit = async (req, res, next) => {
  const { idTuit } = req.params;
  try {
    const tuit = req.body;
    const updatedTuit = await Tuit.findByIdAndUpdate(idTuit, tuit);
    res.status(200).json(updatedTuit);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTuits, addTuit, deleteTuit, updateTuit };
