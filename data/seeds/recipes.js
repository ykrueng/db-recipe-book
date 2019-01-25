exports.seed = function(knex, Promise) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { dish_id: 1, instruction: "Do it yourself", name: "Cheeze Pizza" },
        { dish_id: 1, instruction: "Do it yourself", name: "Mushroom Pizza" },
        { dish_id: 1, instruction: "Do it yourself", name: "Chicken Mushroom Pizza" }
      ]);
    });
};