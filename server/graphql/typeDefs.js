const { gql } = require("apollo-server");

module.exports = gql`
  type Card {
    _id: ID!
    name: String
    description: String
  }

  type Query {
    getCard(ID: ID!): Card!
    getCards: [Card]
  }
`;
