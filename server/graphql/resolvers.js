const Card = require("../models/Card");

module.exports = {
  Query: {
    getCard: async (parent, args) => {
      let card = await Card.aggregate([{ $sample: { size: 1 } }]);
      console.log(card);
      return card[0];
    },

    getCards: async () => {
      return await Card.find();
    },
  },
};
