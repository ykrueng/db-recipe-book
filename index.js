const server = require('express')();

const dishDB = require("./data/helpers/dishesDb");
const recipesDb = require("./data/helpers/recipesDb");



const port = 8000;
server.listen(port, () => { console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`); })