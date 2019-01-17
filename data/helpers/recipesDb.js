const db = require("../dbConfig");

module.exports = {
  getRecipes: function() {
    return db("recipes")
      .select("dishes.name as dish", "recipes.*")
      .join("dishes", "dishes.id", "recipes.dish_id");
  },

  addRecipes: function(recipe) {
    return db("recipes").insert(recipe);
  }
};