exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", t => {
    t.increments("id").primary();
    t.string("name", 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
