import { gql } from "@apollo/client";

export const QUERY_CARD = gql`
  query getCard {
    getCard {
      _id
      name
      description
    }
  }
`;
