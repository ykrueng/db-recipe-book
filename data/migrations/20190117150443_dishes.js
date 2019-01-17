exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", t => {
    t.increments().primary();
    t.string("name", 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
