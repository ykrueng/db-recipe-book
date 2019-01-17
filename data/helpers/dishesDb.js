const db = require("../dbConfig");

module.exports = {
  getDishes: function() {
    return db("dishes");
  },

  addDish: function(dish) {
    return db("dishes").insert(dish);
  },

  getDish: function(id) {
    return db("dishes")
      .select("dishes.name as dish", "recipes.name as recipe")
      .join("recipes", "dishes.id", "recipes.dish_id")
      .where("dishes.id", id);
  }
};
