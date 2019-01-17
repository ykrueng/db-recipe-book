exports.seed = function(knex, Promise) {
  return knex("dishes")
    .truncate()
    .then(function() {
      return knex("dishes").insert([
        { name: "Pizza" },
        { name: "Chicken Nugget" },
        { name: "Pasta" },
        { name: "Curry" }
      ]);
    });
};