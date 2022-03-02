require("dotenv").config();
// const debug = require("debug")("tuits:tuitsController");
const Tuit = require("../../database/models/Tuit");

const getAllTuits = async (req, res) => {
  const tuits = await Tuit.find();
  res.json({ tuits });
};

module.exports = getAllTuits;
