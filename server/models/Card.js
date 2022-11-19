const { model, Schema } = require("mongoose");

const cardSchema = new Schema({
  name: String,
  description: String,
});

module.exports = model("Card", cardSchema);
