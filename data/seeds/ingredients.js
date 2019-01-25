exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { name: "Cheese" },
        { name: "Tomato" },
        { name: "Mushroom" },
        { name: "Chicken" },
        { name: "Breadcrumb" },
        { name: "Flour" },
        { name: "Potato" },
        { name: "Spaghetti" }
      ]);
    });
};