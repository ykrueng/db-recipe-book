exports.seed = function(knex, Promise) {
  return knex('recipe_ingredient_unit').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient_unit').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, unit_id: 1},
        {recipe_id: 1, ingredient_id: 2, quantity: 1, unit_id: 1},
        {recipe_id: 2, ingredient_id: 1, quantity: 1, unit_id: 1},
        {recipe_id: 2, ingredient_id: 2, quantity: 1, unit_id: 1},
        {recipe_id: 2, ingredient_id: 3, quantity: 1, unit_id: 2},
        {recipe_id: 3, ingredient_id: 1, quantity: 1.25, unit_id: 1},
        {recipe_id: 4, ingredient_id: 2, quantity: .75, unit_id: 1},
        {recipe_id: 3, ingredient_id: 3, quantity: 1, unit_id: 2},
        {recipe_id: 3, ingredient_id: 4, quantity: 1.5, unit_id: 2}
      ]);
    });
};
