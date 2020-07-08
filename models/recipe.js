const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  timeForCooking: { type: String, required: true },
  timeForPrep: { type: Date, default: Date.now },
  servings: { type: String, default: "Unassigned" },
  image: { type: Boolean, default: false },
  ingredients: { type: Boolean, default: false },
  recipie: { type: Boolean, default: false },
  projectID: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
