const Card = require("../models/Card");

module.exports = {
  Query: {
    getCard: async (_, { ID }) => {
      return await Card.findById(ID);
    },

    getCards: async () => {
      return await Card.find();
    },
  },
};
