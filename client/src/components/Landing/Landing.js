import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./landing.css";
import TarotCard from "../snippets/TarotCard/TarotCard";

import { useQuery } from "@apollo/client";
import { QUERY_CARD } from "../../utils/queries";

export default function Landing() {
  // query single card data
  const { loading, data } = useQuery(QUERY_CARD);
  const [isVisible, setVisible] = useState(true);

  const onClick = () => {
    setVisible(!isVisible);
  };

  return (
    <Container fluid>
      <Row className="landingPage">
        <Col xs={7} className="d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <h3 id="landingQuote">
              “Yesterday's the past, tomorrow's the future, but today is a gift.
              That's why it's called the present.”
              <span className="author">~ Bil Keane</span>
            </h3>
          </div>
        </Col>
        <Col className="image1Background">
          {data && data.getCard && (
            <TarotCard
              name={data.getCard.name}
              isVisible={isVisible}
              onClick={onClick}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
