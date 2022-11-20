import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/container.css";

export default function Landing() {
  return (
    <Container fluid>
      <Row className="landingPage">
        <Col xs={7} className="d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <h3 id="landingQuote">
              “Yesterday's the past, tomorrow's the future, but today is a gift.
              That's why it's called the present.”{" "}
              <span className="author">~ Bil Keane</span>
            </h3>
          </div>
        </Col>
        <Col className="image1Background"></Col>
      </Row>
    </Container>
  );
}
