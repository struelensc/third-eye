const { gql } = require("apollo-server");

module.exports = gql`
  type Card {
    name: String
    description: String
  }

  type Query {
    card(ID: ID!): Card!
    getCards(amount: Int): [Card]
  }
`;
