exports.up = function(knex, Promise) {
  return knex.schema.createTable("unit_measurement", t => {
    t.increments("id").primary();
    t.string("name", 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("unit_measurement");
};
