exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredient_unit", t => {
    t.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");

    t.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");

    t.integer("unit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("unit_measurement");

    t.float("quantity").notNullable();

    t.primary(['recipe_id', 'ingredient_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredient_unit");
};
