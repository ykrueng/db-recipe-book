const server = require('express')();
const config = require('./serverConfig');

config(server);

const dishDB = require("./data/helpers/dishesDb");
const recipesDb = require("./data/helpers/recipesDb");

server.get('/', (req, res) => {
  res.status(200).send("Hello from DB-RECIPE-BOOK")
});

server.get('/dishes', async(req, res) => {
  try {
    const dishes = await dishDB.getDishes();
    res.status(200).json(dishes)
  } catch (err) {
    res.status(500).json({ message: "Cannot access database"})
  }
});

server.post('/dishes', async (req, res) => {
  const { name } = req.body;
  try {
    const id = await dishDB.addDish({ name });
    res.status(200).json(id)
  } catch (err) {
    res.status(500).json({ message: "Cannot access database"})
  }
});

server.get('/dishes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await dishDB.getDish(id);
    res.status(201).json(dish)
  } catch (err) {
    res.status(500).json({ message: "Cannot access database"})
  }
});

server.get('/recipes', async(req, res) => {
  try {
    const recipes = await recipesDb.getRecipes();
    res.status(200).json(recipes)
  } catch (err) {
    res.status(500).json({ message: "Cannot access database"})
  }
});

server.post('/recipes', async (req, res) => {
  const { recipe } = req.body;
  try {
    const id = await recipesDb.addRecipes(recipe);
    res.status(201).json(id)
  } catch (err) {
    res.status(500).json({ message: "Cannot access database"})
  }
});

const port = 8000;
server.listen(port, () => { console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`); })