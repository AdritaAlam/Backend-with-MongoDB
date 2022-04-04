const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chocolates = new Schema(
  {
    id: Number,
    name: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Chocolates = mongoose.model("Chocolates", chocolates);
module.exports = Chocolates;
