const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  timeForCooking: { type: String, required: true },
  timeForPrep: { type: String, required: true },
  servings: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  recipie: { type: String, required: true },
  projectID: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
