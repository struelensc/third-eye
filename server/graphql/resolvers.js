const Card = require("../models/Card");

module.exports = {
  Query: {
    async card(_, { ID }) {
      return await Card.findById(ID);
    },
    async getCards(_, { amount }) {
      return await Card.findRandom().limit(amount);
    },
  },
};
