const { gql } = require("apollo-server-express");

module.exports = gql`
  type Card {
    _id: ID!
    name: String
    description: String
  }

  type Query {
    getCard: Card!
    getCards: [Card]
  }
`;
