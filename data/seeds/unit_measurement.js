exports.seed = function(knex, Promise) {
  return knex("unit_measurement")
    .truncate()
    .then(function() {
      return knex("unit_measurement").insert([
        { name: "Cup" },
        { name: "Tablespoon" },
        { name: "Lbs" }
      ]);
    });
};