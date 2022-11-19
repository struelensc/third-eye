const db = require("../config/connection");
const { Card } = require("../models");

const cardData = require("./cardData.json");

db.once("open", async () => {
  await Card.deleteMany({});

  const cards = await Card.insertMany(cardData);

  console.log("Cards seeded!");
  process.exit(0);
});
