import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/landing.css";
import TarotCard from "./snippets/TarotCard";

import { useQuery } from "@apollo/client";
import { QUERY_CARD } from "../utils/queries";

export default function Landing() {
  const [isVisible, setVisible] = useState(true);

  // query data
  const cardInfo = useQuery(QUERY_CARD);

  const onClick = () => {
    setVisible(!isVisible);
    console.log(cardInfo);
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
          <Container className="min-vh-100 d-flex justify-content-center align-items-center">
            <div
              onClick={onClick}
              className={`${isVisible ? "visible" : "fade"}`}
            >
              {/* Filler card stack */}
              <div className="card-group">
                <div className="tarot-card"></div>
                <div className="tarot-card"></div>
                <div className="tarot-card"></div>
              </div>
            </div>
            <div
              onClick={onClick}
              className={`${isVisible ? "fade" : "visible"}`}
            >
              <TarotCard />
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
