import axios from "axios";

export default {
  // gets all recipes
  getRecipes: function () {
    return axios.get("/api/recipes");
  },

  // Gets recipe with given id
  getRecipe: function (id) {
    return axios.get("/api/bugs/" + id);
  },

  // deletes the recipe with the given id
  deleteRecipe: function (id) {
    return axios.delete("/api/bugs/" + id);
  },

  // Saves a recipe to the database

  saveRecipe: function (recipeData) {
    return axios.post("/api/bugs", recipeData);
  },

  updateRecipe: function (id, recipedata) {
    console.log("recipe updated");
    return axios.put("/api/bugs/" + id, recipedata);
  },
};
