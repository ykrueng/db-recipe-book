exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", t => {
    t.increments("id").primary();

    t.string("name")
      .unique()
      .notNullable();

    t.string("instruction")
      .notNullable();

    t.integer("dish_id")
      .unsigned()
      .notNullable();

    t.foreign("dish_id")
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};