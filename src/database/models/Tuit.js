const { model, Schema } = require("mongoose");

const TuitSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
    min: 1,
    max: 200,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Tuit = model("Tuit", TuitSchema, "tuits");

module.exports = Tuit;
