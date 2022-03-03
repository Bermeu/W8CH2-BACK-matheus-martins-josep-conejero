const { model, Schema } = require("mongoose");

const TuiteroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
});

const Tuitero = model("Tuitero", TuiteroSchema, "tuiteros");

module.exports = Tuitero;
